import React from 'react';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

// material ui icons
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Skeleton from '@material-ui/lab/Skeleton';
import withStyles from '@material-ui/core/styles/withStyles';

// core components
import {
    Typography,
    Button,
    PlanFeature,
    DetailAccordion,
    CompareCheckbox
} from 'components';
import PlanDetail from 'components/PlanDetail/PlanDetail';
import QuoteLableItem from 'components/QuoteItem/QuoteLableItem';
import CompanyLogo from './CompanyLogo';

// HOC
import withMemo from 'components/HOC/withMemo';

// project utils
import { getProxy } from 'containers/SuppResultItem/proxy';
import { PLAN_DETAILS } from 'common/data/plans';
// import PlanDetailItem from 'components/PlanDetail/PlanDetailItem';

import NumberFormat from 'react-number-format';

// jss
import styles from './quoteItemStyle';

const AnnualDeductible = ({ items }) => {
    return (
        <Grid container direction="row">
            <Grid item xs={12} md={4}>
                <Typography fontSize={'1rem'} fontWeight="400">
                    Annual Deductible:
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                <Grid container direction="row">
                    {(items || []).map(({ value, label }, index) => (
                        <Grid key={index} item xs={12} md={12 / items.length}>
                            <Box display="flex" flexDirecion="row">
                                <Typography
                                    fontSize={'1rem'}
                                    display={'inline'}
                                    fontWeight={400}>
                                    {label}:&nbsp;
                                </Typography>
                                <Typography
                                    fontSize={'1rem'}
                                    fontWeight="700"
                                    display={'inline'}>
                                    <NumberFormat
                                        value={value}
                                        displayType="text"
                                        thousandSeparator={true}
                                        prefix={'$'}
                                    />
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

const QuoteItem = ({
    quote,
    compareSelected,
    onChangeCompareItem,
    canCompare,
    index,
    classes,
    onChangeSize
}) => {
    const [loading, setLoading] = React.useState(false);

    const proxy = getProxy(quote);
    const planDetail = PLAN_DETAILS[proxy['PLAN']] || null;
    const annualDeductible = planDetail['annual_deductible'];

    useDeepCompareEffectNoCheck(() => {
        setLoading(true);

        onChangeSize && onChangeSize();
    }, []);

    return (
        <Box p={1} bgcolor="background.primary">
            {loading ? (
                <Box
                    bgcolor="background.secondary"
                    p={5}
                    className={index % 3 === 2 ? classes.pageBreak : ''}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item xs={4} md={4}>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <Box py={1}>
                                    <Typography
                                        variant="h1"
                                        fontSize="24px"
                                        lineHeight="30px"
                                        fontWeight={500}>
                                        From
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="h1"
                                    fontSize="28px"
                                    lineHeight="36px"
                                    fontWeight={700}>
                                    ${proxy['MONTHLY_RATE']}
                                </Typography>
                                <Typography
                                    variant="h1"
                                    fontSize="15px"
                                    fontWeight={400}>
                                    Monthly Premium
                                </Typography>

                                <Box py={2} mt={2}>
                                    <a href="tel:8884144575">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            onClick={() => console.log(quote)}>
                                            Call to Apply
                                        </Button>
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <CompanyLogo
                                companyName={proxy['COMPANY_FULL_NAME']}
                            />

                            <Typography
                                variant="h1"
                                fontSize="15px"
                                fontWeight={500}>
                                <a href="#">Plan {proxy['PLAN']}</a>
                            </Typography>

                            {planDetail && (
                                <Box py={1}>
                                    <AnnualDeductible
                                        items={annualDeductible}
                                    />
                                </Box>
                            )}

                            {planDetail && (
                                <Box py={2}>
                                    <QuoteLableItem label="Plan Features:">
                                        <Grid container direction="row">
                                            {planDetail.features.map(
                                                (feature) => (
                                                    <PlanFeature
                                                        key={feature}
                                                        label={feature}
                                                    />
                                                )
                                            )}
                                        </Grid>
                                    </QuoteLableItem>
                                </Box>
                            )}
                        </Grid>
                        <Box
                            width="100%"
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-end">
                            <CompareCheckbox
                                disabled={!canCompare && !compareSelected}
                                handleChange={(checked) =>
                                    onChangeCompareItem(quote, checked)
                                }
                                checked={compareSelected}
                            />
                        </Box>
                        <Divider
                            variant="fullWidth"
                            style={{ width: '100%' }}
                        />

                        {planDetail && (
                            <DetailAccordion
                                label="View Detail"
                                onChange={onChangeSize}>
                                <PlanDetail plan={proxy['PLAN']} />
                            </DetailAccordion>
                        )}
                    </Grid>
                </Box>
            ) : (
                <Skeleton variant="rect" width="100%" height={300} />
            )}
        </Box>
    );
};

export default withStyles(styles)(withMemo(QuoteItem));
