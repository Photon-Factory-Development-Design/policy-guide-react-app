import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import LinearProgress from '@material-ui/core/LinearProgress';

import clsx from 'clsx';
import { Button, Grid, Box, CircularProgress } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { TextField, CustomComboBox, Typography } from 'components';
import { AgeCheck } from 'components/TextField/validators';
import {
    GenderOptions,
    TobaccoOptions
} from 'containers/QuoteSubmissionForm/options';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: 'right'
    },
    stepLabelRoot: {
        flexDirection: 'row-reverse',
        cursor: 'pointer'
    },
    stepLabelLabel: {
        color: '#009F83 !important',
        fontSize: '16px'
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    actionsContainer: {
        marginBottom: theme.spacing(2)
    },
    resetContainer: {
        padding: theme.spacing(3)
    }
}));

function getSteps() {
    return ['Zipcode selection', 'Age', 'Gender', 'Tobacco'];
}

const styles = {
    slideContainer: {
        height: '100vh'
    },
    slide: {
        padding: 15,
        height: '100vh',
        color: '#fff'
    }
};

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        width: 2,
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px'
    },
    active: {
        height: 60,
        width: 2,
        backgroundColor: '#009F83'
    },
    completed: {
        height: 60,
        width: 2,
        backgroundColor: '#AAA'
    }
});

function Icon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}></div>
    );
}

// the URL endpoint to make CSG API Request
const FB_FUNCTION_URL =
    'https://us-central1-landing-pages-2f0ab.cloudfunctions.net/helloWorld';
const CSG_URLS = {
    QUOTES: 'https://csgapi.appspot.com/v1/med_supp/quotes.json'
};

export default function VerticalLinearStepper({ onUpdate }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [age, setAge] = React.useState(65);
    const [zipcode, setZipcode] = React.useState('98110');
    const [gender, setGender] = React.useState();
    const [tobacco, setTobacco] = React.useState();
    const [loading, setLoading] = React.useState(0);
    const classes = useStyles();
    const steps = getSteps();

    // submitted handler
    const getQuote = async () => {
        if (!loading) {
            setLoading((prev) => prev + 1);

            // create API to CSG
            const jsonData = {
                method: 'GET',
                url: CSG_URLS.QUOTES,
                params: {
                    zip5: zipcode,
                    age: parseInt(age),
                    gender: gender.value,
                    tobacco: tobacco.value
                }
            };
            try {
                const response = await axios({
                    url: FB_FUNCTION_URL,
                    params: {
                        axios: JSON.stringify(jsonData)
                    },
                    method: 'GET'
                });

                // TODO: pass the result to parent
                if (response.status === 200 && response.data.result) {
                    onUpdate(response.data.result, {
                        zipcode: zipcode,
                        age: age,
                        gender: gender,
                        tobacco: tobacco
                    });
                }
            } catch (e) {
                console.log(e);
            } finally {
                setLoading((prev) => prev - 1);
            }
        }
        return;
    };

    const changeStep = () => {
        switch (activeStep) {
            case 0: {
                if (!zipcode) return;
                break;
            }
            case 1: {
                if (!age && age < 65) return;
                break;
            }
            case 2: {
                if (!gender) return;
                break;
            }
            case 3: {
                if (!tobacco) return;
                getQuote();
                return;
            }
            default: {
                return;
            }
        }
        setActiveStep((prev) => prev + 1);
    };

    return (
        <div className={classes.root}>
            <LinearProgress
                variant="determinate"
                value={(activeStep / 3) * 100}
            />

            <Grid container direction="row" alignItems="center">
                <Grid item xs={12} md={9}>
                    <SwipeableViews
                        containerStyle={styles.slideContainer}
                        axis="y"
                        index={activeStep}>
                        <div
                            style={Object.assign(
                                {},
                                styles.slide,
                                styles.slide1
                            )}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                justifyContent="center">
                                <Box py={2}>
                                    <Typography variant="h2" align="left">
                                        Where do you live?
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Zip Code"
                                        label="Zip Code"
                                        size="small"
                                        value={zipcode}
                                        onChange={(e) =>
                                            setZipcode(e.target.value)
                                        }
                                        required
                                        name="zipcode"
                                    />
                                    <Box px={2}>
                                        <Button
                                            onClick={changeStep}
                                            variant="outlined">
                                            Continue
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div
                            style={Object.assign(
                                {},
                                styles.slide,
                                styles.slide1
                            )}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                justifyContent="center">
                                <Box py={2}>
                                    <Typography variant="h2" align="left">
                                        How young are you? ;)
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                    <TextField
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Age"
                                        label="Age"
                                        size="small"
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                        name="age"
                                        validator={AgeCheck}
                                        submitted={true}
                                    />
                                    <Box px={2}>
                                        <Button
                                            onClick={changeStep}
                                            variant="outlined">
                                            Continue
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div
                            style={Object.assign(
                                {},
                                styles.slide,
                                styles.slide2
                            )}>
                            {' '}
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                justifyContent="center">
                                <Box py={2}>
                                    <Typography variant="h2" align="left">
                                        What's your gender?
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                    <CustomComboBox
                                        options={GenderOptions}
                                        optionRenderer={(option) =>
                                            option.label || ''
                                        }
                                        size="small"
                                        label="Gender"
                                        placeholder="Female"
                                        value={gender}
                                        onChange={(e, value) => {
                                            setGender(value);
                                        }}
                                        required
                                        name="gender"
                                        fullWidth
                                    />

                                    <Box px={2}>
                                        <Button
                                            onClick={changeStep}
                                            variant="outlined">
                                            Continue
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div
                            style={Object.assign(
                                {},
                                styles.slide,
                                styles.slide3
                            )}>
                            <Box
                                p={1}
                                height="100%"
                                display="flex"
                                flexDirection="column"
                                justifyContent="center">
                                <Box py={2}>
                                    <Typography variant="h2" align="left">
                                        Do you use any form of tobacco products?
                                    </Typography>
                                </Box>
                                <Box display="flex" flexDirection="row">
                                    <CustomComboBox
                                        options={TobaccoOptions}
                                        optionRenderer={(option) =>
                                            option.label || ''
                                        }
                                        size="small"
                                        label="Please Choose"
                                        placeholder="Please Choose"
                                        value={tobacco}
                                        onChange={(e, value) =>
                                            setTobacco(value)
                                        }
                                        name="tobacco"
                                        required
                                        fullWidth
                                    />

                                    <Box px={2}>
                                        <Button
                                            onClick={changeStep}
                                            variant="outlined">
                                            <Box px={1}>Get Quote</Box>
                                            {!!loading && (
                                                <CircularProgress size={20} />
                                            )}
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </SwipeableViews>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stepper
                        activeStep={activeStep}
                        connector={null}
                        orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel
                                    onClick={() =>
                                        setActiveStep((prev) =>
                                            Math.min(prev, index)
                                        )
                                    }
                                    StepIconComponent={Icon}
                                    classes={{
                                        root: classes.stepLabelRoot,
                                        label: classes.stepLabelLabel,
                                        active: classes.stepLabelLabel
                                    }}>
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Grid>
            </Grid>
        </div>
    );
}
