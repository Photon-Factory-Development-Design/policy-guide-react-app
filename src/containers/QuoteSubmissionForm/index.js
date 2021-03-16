import moment from 'moment';
import React from 'react';
import {
    Card,
    Box,
    CardContent,
    Grid,
    CardActions,
    Button
} from '@material-ui/core';
import {
    Typography,
    BackgroundContainer,
    CustomComboBox,
    KeyboardDatePicker,
    TextField
} from 'components';
import {
    GenderOptions,
    PlanOptions,
    TobaccoOptions /*  */
} from 'containers/QuoteSubmissionForm/options';
import { checkErrorObjValidated } from 'utils/array_utils';
import axios from 'axios';

// the URL endpoint to make CSG API Request
const FB_FUNCTION_URL =
    'https://us-central1-landing-pages-2f0ab.cloudfunctions.net/helloWorld';
const CSG_URLS = {
    QUOTES: 'https://csgapi.appspot.com/v1/med_supp/quotes.json'
};

const QuotesSubmissionForm = () => {
    const [zipcode, setZipcode] = React.useState('98110');
    const [age, setAge] = React.useState(65);
    const [gender, setGender] = React.useState({});
    const [tobacco, setTobacco] = React.useState({});
    const [plan, setPlan] = React.useState({});
    const [effectiveDate, setEffectiveDate] = React.useState(
        null /*new Date()*/
    );
    const [error, setError] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);

    // submitted handler
    const getQuote = async () => {
        setSubmitted(true);

        console.log(error);
        if (checkErrorObjValidated(error)) {
            // TODO: create API to CSG
            const jsonData = {
                method: 'GET',
                url: CSG_URLS.QUOTES,
                params: {
                    zip5: zipcode,
                    age: age,
                    gender: gender.value,
                    tobacco: tobacco.value,
                    effective_date: moment(effectiveDate).format('YYYY-MM-DD'),
                    fields: 'company_base.name_full'
                }
            };

            const response = await axios({
                url: FB_FUNCTION_URL,
                params: {
                    axios: JSON.stringify(jsonData)
                },
                method: 'GET'
            });

            // TODO: pass the result to parent
            if (response.status === 200 && response.data.result) {
                console.log(response.data.result);
            }
        }
        return;
    };

    // form on validated
    // update error object
    const onValidated = (error, name) => {
        setError((prev) => ({ ...prev, [name]: error }));
    };

    return (
        <Card>
            <BackgroundContainer color="blue">
                <Box px={2} py={1}>
                    <Typography variant="h6" color="white">
                        Run a Quote
                    </Typography>
                </Box>
            </BackgroundContainer>

            <CardContent>
                <Grid container direction="row">
                    <Grid item xs={12} md={6}>
                        <Box p={1}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Zip Code"
                                label="Zip Code"
                                size="small"
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                required
                                submitted={submitted}
                                onValidated={onValidated}
                                name="zipcode"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box p={1}>
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
                                submitted={submitted}
                                onValidated={onValidated}
                                name="age"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box p={1}>
                            <CustomComboBox
                                options={GenderOptions}
                                optionRenderer={(option) => option.label || ''}
                                size="small"
                                label="Gender"
                                placeholder="Female"
                                value={gender}
                                onChange={(e, value) => setGender(value)}
                                required
                                submitted={submitted}
                                onValidated={onValidated}
                                name="gender"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Box p={1}>
                            <CustomComboBox
                                options={TobaccoOptions}
                                optionRenderer={(option) => option.label || ''}
                                size="small"
                                label="Tobacco"
                                placeholder="Tobacco"
                                value={tobacco}
                                onChange={(e, value) => setTobacco(value)}
                                name="tobacco"
                                required
                                submitted={submitted}
                                onValidated={onValidated}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Box p={1}>
                            <CustomComboBox
                                options={PlanOptions}
                                optionRenderer={(option) => option.label || ''}
                                size="small"
                                label="Plan"
                                placeholder="A"
                                name="plan"
                                value={plan}
                                onChange={(e, value) => setPlan(value)}
                                name="plan"
                                required
                                submitted={submitted}
                                onValidated={onValidated}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box p={1}>
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
                                submitted={submitted}
                                onValidated={onValidated}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                <Box px={2}>
                    <Button onClick={getQuote} color="secondary">
                        Get Quote
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default QuotesSubmissionForm;
