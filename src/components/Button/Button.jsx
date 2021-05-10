import React from 'react';

// jss
import styles from './buttonStyles';

// material ui components
import MuiButton from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const Button = ({ classes, ...props }) => {
    return <MuiButton {...props} classes={{ root: classes.root }} />;
};

export default withStyles(styles)(Button);
