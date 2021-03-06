import React from 'react';
import { getProxy, fields } from './proxy';
import { Grid, Box, Card, LinearProgress } from '@material-ui/core';
import { Typography } from 'components';
import LabelItem from './LabelItem.jsx';
import { PlanFeatures } from 'containers/QuoteSubmissionForm/options';

// result fields to display in result panel
const resultFields = Object.keys(fields)
    .filter((key) => fields[key].show !== false)
    .map((key) => ({
        label: fields[key].label,
        field: key
    }));

const PlanFeaturesContainer = ({ plan }) => {
    const plans = PlanFeatures[plan];
    console.log(plan);
    return (
        <React.Fragment>
            <Grid container direction="row">
                <Grid item xs={12} md={4}>
                    <Typography>
                        <Box fontWeight={700}>Plan Features:</Box>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    {plans &&
                        plans.map((plan, index) => (
                            <Box px={1} key={index}>
                                <Typography>{plan}</Typography>
                            </Box>
                        ))}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

const SuppResultItem = ({ data }) => {
    // proxy object
    const proxy = React.useMemo(() => getProxy(data), [data]);

    return (
        <Box py={2}>
            <Card>
                <Grid container direction="row">
                    <Grid item xs={12} md={3}>
                        <Box bgcolor="background.darkBlue" p={2}>
                            <Typography variant="h5" color="white">
                                ${proxy['MONTHLY_RATE'] || ''}/mo
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Box bgcolor="background.lightBlue" p={2}>
                            <Typography variant="h5" color="white">
                                {proxy['COMPANY_NAME'] || ''}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container direction="row">
                    <Grid item xs={12} md={3}>
                        <Box p={1}>
                            <Grid container direction="column">
                                <Typography align="center" variant="body1">
                                    Household Discount
                                </Typography>
                                <LinearProgress
                                    value={proxy['DISCOUNT']}
                                    variant="determinate"
                                />
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={9}>
                        <Box p={1}>
                            <Grid container direction="row">
                                {resultFields.map((item, index) => (
                                    <Grid
                                        item
                                        key={`label-item-${index}`}
                                        xs={12}
                                        md={4}>
                                        <LabelItem
                                            label={item.label}
                                            value={proxy[item.field]}
                                        />
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <PlanFeaturesContainer
                                        plan={proxy['PLAN']}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

export default SuppResultItem;
