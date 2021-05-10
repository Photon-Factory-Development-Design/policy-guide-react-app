import React from 'react';

// material ui icons
import Grid from '@material-ui/core/Grid';

// core components
import { Typography } from 'components';

const QuoteLableItem = ({ label, children }) => {
    return (
        <Grid container direction="row">
            <Grid item xs={12} md={4}>
                <Typography variant="h1" fontSize="15px" fontWeight={400}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
                {children}
            </Grid>
        </Grid>
    );
};

export default QuoteLableItem;
