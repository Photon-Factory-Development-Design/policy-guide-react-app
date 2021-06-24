import React from 'react';
import { Box } from '@material-ui/core';
import { Typography } from 'components';

const LabelItem = ({ label, value }) => {
    return (
        <Box display="flex" flexDirection="row">
            <Typography color="primary" variant="body1">
                {label}
            </Typography>
            <Typography color="blue" variant="body1">
                <Box fontWeight={700}>{value}</Box>
            </Typography>
        </Box>
    );
};

export default LabelItem;
