import React from 'react';
import _ from 'lodash';

const withMemo = (Component, props) => {
    return React.memo(Component, (prev, next) => {
        const newPrev = props ? _.pick(prev, props) : prev;
        const newNext = props ? _.pick(next, props) : next;
        return _.isEqual(newPrev, newNext);
    });
};

export default withMemo;
