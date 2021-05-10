import React from 'react';
// material ui components
import Box from '@material-ui/core/Box';
// core component
import CompareQuote from 'components/Compare/CompareQuote';
import CompareItem from 'components/Compare/CompareItem';
// constant
import { getProxy } from 'containers/SuppResultItem/proxy';
import { detail_infos, PLAN_DETAILS } from 'common/data/plans';
import ComparePlanItem from 'components/Compare/ComparePlanItem';

const Compare = ({ quote1, quote2 }) => {
    const proxy1 = React.useMemo(() => getProxy(quote1), [quote1]),
        proxy2 = React.useMemo(() => getProxy(quote2), [quote2]);
    const plan1 = React.useMemo(() => proxy1['PLAN'], [proxy1]),
        plan2 = React.useMemo(() => proxy2['PLAN'], [proxy2]);
    const planDetail1 = React.useMemo(() => PLAN_DETAILS[plan1], [plan1]),
        planDetail2 = React.useMemo(() => PLAN_DETAILS[plan2], [plan2]);

    return (
        <Box>
            <Box display="flex" flexDirection="row">
                <CompareQuote quote={quote1} />
                <CompareQuote quote={quote2} />
            </Box>
            <Box>
                <CompareItem
                    label="Monthly Premium"
                    content1={`From $${proxy1['MONTHLY_RATE']}`}
                    content2={`From $${proxy2['MONTHLY_RATE']}`}
                />
                {detail_infos.map((info) => (
                    <ComparePlanItem
                        detailInfo={info}
                        planDetail1={planDetail1}
                        planDetail2={planDetail2}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Compare;
