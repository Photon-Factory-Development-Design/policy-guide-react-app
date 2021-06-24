import React from 'react';
// material ui components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// core components
import { Typography } from 'components';

const CompareItem = ({ label, items }) => {
    return (
        <Box py={2}>
            <Grid container direction="row">
                <Grid item xs={12} md={4}>
                    <Typography fontWeight={700} fontSize={20}>
                        {label}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box display="flex" flexDirection="row">
                        {items.map((content) => (
                            <Box flex={1}>
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
                            </Box>
                        ))}
                        {}
                    </Box>
                </Grid>
            </Grid>
            <Divider style={{ width: '100%' }} />
        </Box>
    );
};

export default CompareItem;
