import React from 'react';
import './assets/styles/base.scss';
import DateFnsUtils from '@date-io/date-fns';
import { QuoteSubmissionForm, SuppResultItem } from 'containers';
import { Container, ThemeProvider, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from 'theme';

function App() {
    const [items, setItems] = React.useState([]);

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <QuoteSubmissionForm onUpdate={setItems} />

                        <Grid container direction="column">
                            {items.map((item, index) => (
                                <Grid item key={`result-item-${index}`}>
                                    <SuppResultItem data={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App;
