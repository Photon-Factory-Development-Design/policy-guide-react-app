import React from 'react';
import Box from '@material-ui/core/Box';
// constant
import { detail_infos, PLAN_DETAILS } from 'common/data/plans';
import { Typography } from 'components';
import PlanDetailItem from 'components/PlanDetail/PlanDetailItem';

const coverageHighLights = [
    detail_infos[2],
    detail_infos[3],
    detail_infos[4],
    detail_infos[5],
    detail_infos[6]
];

const hospitalServiceCoverage = [
    detail_infos[7],
    detail_infos[8],
    detail_infos[9]
];

const PlanDetail = ({ plan }) => {
    const planDetail = PLAN_DETAILS[plan];

    return (
        <Box width="100%">
            <Box py={2}>
                <Typography fontSize={30} fontWeight={900}>
                    Coverage Highlights
                </Typography>
                {coverageHighLights.map((item, index) => (
                    <PlanDetailItem
                        key={index}
                        detailInfo={item}
                        planDetail={planDetail}
                    />
                ))}
            </Box>

            <Box py={2}>
                <Typography fontSize={30} fontWeight={900}>
                    Hospital Services Coverage
                </Typography>
                {hospitalServiceCoverage.map((item, index) => (
                    <PlanDetailItem
                        key={index}
                        detailInfo={item}
                        planDetail={planDetail}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default PlanDetail;
