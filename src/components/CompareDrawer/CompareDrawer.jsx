import React from 'react';

// material ui components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

// material ui icons
import CloseIcon from '@material-ui/icons/Close';

// core components
import CompareQuote from 'components/Compare/CompareQuote';

const CompareDrawer = ({ open, compareItems, onClose, onCompare }) => {
    return (
        <Drawer anchor="bottom" open={open} variant="persistent">
            <Box display="flex" flexDirection="row" justifyContent="center">
                {compareItems.map((item) => (
                    <CompareQuote key={item.key} quote={item} />
                ))}

                <Button
                    variant="contained"
                    size="small"
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

export default CompareDrawer;
