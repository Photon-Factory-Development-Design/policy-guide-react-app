import React from 'react';
import axios from 'axios';
import './assets/styles/base.scss';
import DateFnsUtils from '@date-io/date-fns';
import { QuoteSubmissionForm } from 'containers';
import { Container, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from 'theme';

function App() {
    // fetch quotes
    const axiosDataJson = {
        method: 'GET',
        params: {
            zip5: '15963',
            age: 65,
            gender: 'M',
            tobacco: 0,
            select: 0,
            effective_date: '2015-01-01',
            fields: 'company_base.name_full'
        },
        url: 'https://csgapi.appspot.com/v1/med_supp/quotes.json'
    };

    axios({
        url: 'http://localhost:5001/landing-pages-2f0ab/us-central1/helloWorld',
        params: {
            axios: JSON.stringify(axiosDataJson)
        },
        method: 'GET'
    });

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <QuoteSubmissionForm />
                    </Container>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App;
