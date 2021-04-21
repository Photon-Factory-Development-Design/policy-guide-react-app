import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import clsx from 'clsx';
import { Button, Grid, Box, CircularProgress } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { TextField, CustomComboBox, KeyboardDatePicker } from 'components';
import {
    GenderOptions,
    TobaccoOptions,
    PlanOptions
} from 'containers/QuoteSubmissionForm/options';
import axios from 'axios';
import moment from 'moment';

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
        color: 'rgb(233, 64, 87) !important'
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
    return [
        'Zipcode selection',
        'Age',
        'Gender',
        'Tobacco',
        'Plan',
        'Effective Date'
    ];
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
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '10px'
    },
    active: {
        height: 40,
        width: 2,
        backgroundColor: 'rgb(233, 64, 87)'
    },
    completed: {
        height: 40,
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
    const [plan, setPlan] = React.useState();
    const [effectiveDate, setEffectiveDate] = React.useState(
        null /*new Date()*/
    );
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
                    tobacco: tobacco.value,
                    effective_date: moment(effectiveDate).format('YYYY-MM-DD'),
                    fields: 'company_base.name_full'
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
                    onUpdate(response.data.result);
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
                if (!age) return;
                break;
            }
            case 2: {
                if (!gender) return;
                break;
            }
            case 3: {
                if (!tobacco) return;
                break;
            }
            case 4: {
                if (!plan) return;
                break;
            }
            case 5: {
                if (!effectiveDate) return;
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
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Zip Code"
                                    label="Zip Code"
                                    size="small"
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                    required
                                    name="zipcode"
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>Next</Button>
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
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>Next</Button>
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
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>Next</Button>
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
                                <CustomComboBox
                                    options={TobaccoOptions}
                                    optionRenderer={(option) =>
                                        option.label || ''
                                    }
                                    size="small"
                                    label="Tobacco"
                                    placeholder="Tobacco"
                                    value={tobacco}
                                    onChange={(e, value) => setTobacco(value)}
                                    name="tobacco"
                                    required
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>Next</Button>
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
                                <CustomComboBox
                                    options={PlanOptions}
                                    optionRenderer={(option) =>
                                        option.label || ''
                                    }
                                    size="small"
                                    label="Plan"
                                    placeholder="A"
                                    name="plan"
                                    value={plan}
                                    onChange={(e, value) => setPlan(value)}
                                    name="plan"
                                    required
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>Next</Button>
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
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    label="Effective Date"
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date'
                                    }}
                                    value={effectiveDate}
                                    onChange={(date) => setEffectiveDate(date)}
                                    inputVariant="outlined"
                                    size="small"
                                    fullWidth
                                    name="effective-date"
                                    required
                                />

                                <Box py={2}>
                                    <Button onClick={changeStep}>
                                        <Box px={1}>Get Quote</Box>{' '}
                                        {!!loading && (
                                            <CircularProgress size={20} />
                                        )}
                                    </Button>
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
