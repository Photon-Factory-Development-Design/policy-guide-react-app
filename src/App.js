import React from 'react';
import './assets/styles/base.scss';
import DateFnsUtils from '@date-io/date-fns';
import {
    QuoteSubmissionForm,
    SuppResultItem,
    FilterContainer
} from 'containers';
import { Container, ThemeProvider, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from 'theme';
import { deepClone } from 'utils/array_utils';
import { getProxy } from 'containers/SuppResultItem/proxy';

const PriceFilters = [
    { min: 0, max: 1000 },
    { min: 1000, max: 3000 },
    { min: 3000, max: 5000 },
    { min: 5000, max: 7000 },
    { min: 7000, max: 9000 },
    { min: 9000, max: 11000 },
    { min: 11000, max: 13000 },
    { min: 13000, max: null }
];

function App() {
    const originalItemsRef = React.useRef([]);
    const [items, setItems] = React.useState([]);
    const [companies, setCompanies] = React.useState({});
    const [prices, setPrices] = React.useState({});

    // on update items from CSG API
    const onUpdateItems = (items, init = false) => {
        if (init) {
            originalItemsRef.current = deepClone(items);

            const newCompanies = {};
            const newPrices = {};
            items.forEach((item) => {
                const proxy = getProxy(item);

                // extract companies
                const companyName = proxy['COMPANY_NAME'];
                if (!newCompanies[companyName]) {
                    newCompanies[companyName] = {
                        label: companyName,
                        count: 0
                    };
                }
                newCompanies[companyName].count++;

                // extract prices
                const price = proxy['MONTHLY_RATE'];
                const index = PriceFilters.findIndex(
                    (obj) =>
                        price > obj.min &&
                        (price <= obj.max || obj.max === null)
                );
                if (!newPrices[index]) {
                    let label;
                    if (PriceFilters[index].min === 0) {
                        label = `Under $${PriceFilters[index].min}`;
                    } else if (PriceFilters[index].max === null) {
                        label = `Over $${PriceFilters[index].min}`;
                    } else {
                        label = `$${PriceFilters[index].min} - $${PriceFilters[index].max}`;
                    }
                    newPrices[index] = {
                        ...PriceFilters[index],
                        label,
                        count: 0
                    };
                }
                newPrices[index].count++;
            });

            setCompanies(newCompanies);
            setPrices(newPrices);
        }
        setItems(deepClone(items));
    };

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                    <Container>
                        <QuoteSubmissionForm
                            onUpdate={(items) => onUpdateItems(items, true)}
                        />

                        <Grid container direction="row" spacing={2}>
                            <Grid item xs={12} md={3}>
                                <FilterContainer
                                    companies={companies}
                                    prices={prices}
                                    items={originalItemsRef.current}
                                    onUpdateItems={onUpdateItems}
                                />
                            </Grid>
                            <Grid item xs={12} md={9}>
                                <Grid container direction="column">
                                    {items.map((item, index) => (
                                        <Grid item key={`result-item-${index}`}>
                                            <SuppResultItem data={item} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App;
