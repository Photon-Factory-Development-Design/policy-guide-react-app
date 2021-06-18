import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import withStyles from '@material-ui/core/styles/withStyles';

// material ui icons
import CloseIcon from '@material-ui/icons/Close';

// core components
import Button from 'components/Button/Button';
import CompareQuote from 'components/Compare/CompareQuote';

// jss
import styles from './compareDrawerStyle';

const CompareDrawer = ({ open, compareItems, onClose, onCompare, classes }) => {
    return (
        <Drawer
            anchor="bottom"
            open={open}
            variant="persistent"
            classes={{ paper: classes.paper }}>
            <Box display="flex" flexDirection="row" justifyContent="center">
                {compareItems.map((item) => (
                    <CompareQuote key={item.key} quote={item} px={2} />
                ))}

                <Button
                    variant="contained"
                    size="small"
                    color="red"
                    onClick={onCompare}
                    disabled={compareItems.length <= 1}>
                    Compare
                </Button>
            </Box>
            <Box position="absolute" right="10%" top={20}>
                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </Box>
        </Drawer>
    );
};

export default withStyles(styles)(CompareDrawer);
