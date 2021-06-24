import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// core components
import { Typography } from 'components';

const PlanDetailItem = ({ detailInfo, planDetail }) => {
    const value = planDetail[detailInfo.field];
    const content = detailInfo.fn ? detailInfo.fn(value) : value;

    return (
        <Box py={2}>
            <Grid container direction="row">
                <Grid item xs={12} md={4}>
                    <Typography fontWeight={400} fontSize={20}>
                        {detailInfo.label}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    {Array.isArray(content)
                        ? content.map((item) => (
                              <Typography
                                  key={item}
                                  fontSize={20}
                                  fontWeight={400}>
                                  {item}
                              </Typography>
                          ))
                        : content}
                </Grid>
            </Grid>
            <Divider style={{ width: '100%' }} />
        </Box>
    );
};

export default PlanDetailItem;
