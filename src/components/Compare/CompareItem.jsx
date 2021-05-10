import React from 'react';
// material ui components
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
// core components
import { Typography } from 'components';

const CompareItem = ({ label, content1, content2 }) => {
    <Box py={2}>
        <Grid container direction="row">
            <Grid item xs={12} md={4}>
                <Typography fontWeight={900} fontSize={20}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                {Array.isArray(content1)
                    ? content1.map((item) => (
                          <Typography key={item} fontSize={20} fontWeight={400}>
                              {item}
                          </Typography>
                      ))
                    : content1}
            </Grid>
            <Grid item xs={12} md={4}>
                {Array.isArray(content1)
                    ? content2.map((item) => (
                          <Typography key={item} fontSize={20} fontWeight={400}>
                              {item}
                          </Typography>
                      ))
                    : content2}
            </Grid>
        </Grid>
        <Divider style={{ width: '100%' }} />
    </Box>;
};

export default CompareItem;
