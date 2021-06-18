import React from 'react';
import {
    Card,
    Box,
    CardContent,
    Grid,
    CardActions,
    CircularProgress
} from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from 'components/Button/Button';
import {
    Typography,
    BackgroundContainer,
    CustomComboBox,
    TextField
} from 'components';
import {
    GenderOptions,
    TobaccoOptions /*  */
} from 'containers/QuoteSubmissionForm/options';
import { checkErrorObjValidated } from 'utils/array_utils';
import axios from 'axios';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

// jss
import styles from './quoteSubmissionFormStyle';

// the URL endpoint to make CSG API Request
const FB_FUNCTION_URL =
    'https://us-central1-landing-pages-2f0ab.cloudfunctions.net/helloWorld';
const CSG_URLS = {
    QUOTES: 'https://csgapi.appspot.com/v1/med_supp/quotes.json'
};

const QuotesSubmissionForm = ({ onUpdate, data, classes }) => {
    const [zipcode, setZipcode] = React.useState(data.zipcode || '98110');
    const [age, setAge] = React.useState(data.age || 65);
    const [gender, setGender] = React.useState(data.gender || '');
    const [tobacco, setTobacco] = React.useState(data.tobacco || '');
    const [error, setError] = React.useState({});

    const [submitted, setSubmitted] = React.useState(false);
    const [loading, setLoading] = React.useState(0);

    useDeepCompareEffectNoCheck(() => {
        setZipcode(data.zipcode);
        setAge(data.age);
        setGender(data.gender);
        setTobacco(data.tobacco);
    }, [data]);

    // submitted handler
    const getQuote = async () => {
        setSubmitted(true);

        if (checkErrorObjValidated(error) && !loading) {
            setLoading((prev) => prev + 1);

            // create API to CSG
            const jsonData = {
                method: 'GET',
                url: CSG_URLS.QUOTES,
                params: {
                    zip5: zipcode,
                    age: age,
                    gender: gender.value,
                    tobacco: tobacco.value,
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
                    onUpdate(response.data.result, {
                        zipcode: zipcode,
                        age: age,
                        gender: gender,
                        tobacco: tobacco,
                        fields: 'company_base.name_full'
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

    // form on validated
    // update error object
    const onValidated = (error, name) => {
        setError((prev) => ({ ...prev, [name]: error }));
    };

    console.log(gender);

    return (
        <Card classes={{ root: classes.root }}>
            <BackgroundContainer color="orange">
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
                                onChange={(e, value) => {
                                    setGender(value);
                                }}
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
                </Grid>
            </CardContent>

            <CardActions>
                <Box px={2}>
                    <Button onClick={getQuote}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center">
                            <Box px={1}>Get Quote</Box>{' '}
                            {!!loading && <CircularProgress size={20} />}
                        </Box>
                    </Button>
                </Box>
            </CardActions>
        </Card>
    );
};

export default withStyles(styles)(QuotesSubmissionForm);
