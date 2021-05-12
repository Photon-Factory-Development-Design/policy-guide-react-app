import React from 'react';
// core components
import CompareItem from 'components/Compare/CompareItem';

const ComparePlanItem = ({ detailInfo, plans }) => {
    return (
        <CompareItem
            label={detailInfo.label}
            items={plans.map((plan) => {
                const value = plan[detailInfo.field];
                return detailInfo.fn ? detailInfo.fn(value) : value;
            })}
        />
    );
};

export default ComparePlanItem;
