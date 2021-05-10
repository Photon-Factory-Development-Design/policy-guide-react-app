import React from 'react';

// material ui components
import withStyles from '@material-ui/core/styles/withStyles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

// material ui icons
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// core components
import { Typography } from 'components';

const Accordion = withStyles({
    root: {
        width: '100%',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
            flex: 'unset'
        },
        '&:before': {
            display: 'none'
        },
        '&$expanded': {
            margin: 'auto'
        }
    },
    expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56
        },
        justifyContent: 'flex-start'
    },
    content: {
        '&$expanded': {
            margin: '12px 0'
        },
        flexGrow: 'unset'
    },
    expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    }
}))(MuiAccordionDetails);

const DetailAccordion = ({ children, label }) => {
    return (
        <Accordion square>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header">
                <Typography>{label}</Typography>
            </AccordionSummary>
            <AccordionDetails>{children}</AccordionDetails>
        </Accordion>
    );
};

export default DetailAccordion;
