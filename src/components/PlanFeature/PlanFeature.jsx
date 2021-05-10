import React from 'react';

// material components
import Box from '@material-ui/core/Box';
import CheckIcon from '@material-ui/icons/Check';

// core components
import { Typography } from 'components';

const PlanFeature = ({ label }) => {
    return (
        <Box display="flex" flexDirection="row" alignItems="center">
            <CheckIcon style={{ color: '#009F83' }} />{' '}
            <Typography>{label}</Typography>
        </Box>
    );
};

export default PlanFeature;
