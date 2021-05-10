import React from 'react';

// material ui icons
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

// core components
import { Typography, Button, PlanFeature, DetailAccordion } from 'components';
import PlanDetail from 'components/PlanDetail/PlanDetail';
import QuoteLableItem from 'components/QuoteItem/QuoteLableItem';

// project utils
import { getProxy } from 'containers/SuppResultItem/proxy';
import { detail_infos, PLAN_DETAILS } from 'common/data/plans';
import PlanDetailItem from 'components/PlanDetail/PlanDetailItem';

const QuoteItem = ({ quote }) => {
    const proxy = getProxy(quote);
    const planDetail = PLAN_DETAILS[proxy['PLAN']] || null;
    const annualDeductible = detail_infos[0];

    return (
        <Box bgcolor="background.secondary">
            <Grid container direction="row">
                <Grid item xs={12} md={4}>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Typography
                            variant="h1"
                            fontSize="24px"
                            fontWeight={500}>
                            From
                        </Typography>
                        <Typography
                            variant="h1"
                            fontSize="28px"
                            fontWeight={700}>
                            ${proxy['MONTHLY_RATE']}
                        </Typography>
                        <Typography
                            variant="h1"
                            fontSize="15px"
                            fontWeight={400}>
                            Monthly Premium
                        </Typography>
                        <Box py={2}>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => console.log(quote)}>
                                View Price
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <img src="https://static.ehealthmedicareplans.com//ehealthinsurance/CarrierProfile/logos/HumanaMedicare.gif" />

                    <Typography variant="h1" fontSize="15px" fontWeight={500}>
                        <a href="#">
                            {proxy['COMPANY_FULL_NAME']} - Plan {proxy['PLAN']}
                        </a>
                    </Typography>

                    {planDetail && (
                        <Box py={1}>
                            <PlanDetailItem
                                detailInfo={annualDeductible}
                                planDetail={planDetail}
                            />
                        </Box>
                    )}

                    {planDetail && (
                        <Box py={2}>
                            <QuoteLableItem label="Plan Features:">
                                <Grid container direction="row">
                                    {planDetail.features.map((feature) => (
                                        <PlanFeature
                                            key={feature}
                                            label={feature}
                                        />
                                    ))}
                                </Grid>
                            </QuoteLableItem>
                        </Box>
                    )}
                </Grid>
                <Divider variant="fullWidth" style={{ width: '100%' }} />

                {planDetail && (
                    <DetailAccordion label="View Detail">
                        <PlanDetail plan={proxy['PLAN']} />
                    </DetailAccordion>
                )}
            </Grid>
        </Box>
    );
};

export default QuoteItem;
