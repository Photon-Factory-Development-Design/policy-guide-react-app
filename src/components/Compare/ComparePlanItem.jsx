import React from 'react';
// core components
import CompareItem from 'components/Compare/CompareItem';

const ComparePlanItem = ({ detailInfo, planDetail1, planDetail2 }) => {
    const value1 = React.useMemo(() => planDetail1[detailInfo.field], [
            planDetail1,
            detailInfo.field
        ]),
        value2 = React.useMemo(() => planDetail2[detailInfo.field], [
            planDetail2,
            detailInfo.field
        ]);
    const content1 = detailInfo.fn ? detailInfo.fn(value1) : value1,
        content2 = detailInfo.fn ? detailInfo.fn(value2) : value2;

    return (
        <CompareItem
            label={detailInfo.label}
            content1={content1}
            content2={content2}
        />
    );
};

export default ComparePlanItem;
