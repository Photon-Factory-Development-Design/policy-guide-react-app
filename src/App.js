import React from 'react';
import './assets/styles/base.scss';
import DateFnsUtils from '@date-io/date-fns';
import {
    SuppResultItem,
    FilterContainer,
    QuoteSubmissionForm
} from 'containers';
import { Container, ThemeProvider, Grid } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from 'theme';
import { deepClone } from 'utils/array_utils';
import { getProxy } from 'containers/SuppResultItem/proxy';
import VerticalLinearStepper from 'components/VerticalStepper';
import { PlanFeatures } from 'containers/QuoteSubmissionForm/options';

const PriceFilters = [
    { min: 0, max: 10.0 },
    { min: 10.0, max: 30.0 },
    { min: 30.0, max: 50.0 },
    { min: 50.0, max: 70.0 },
    { min: 70.0, max: 90.0 },
    { min: 90.0, max: 110.0 },
    { min: 110.0, max: 130.0 },
    { min: 130.0, max: null }
];

function App() {
    const originalItemsRef = React.useRef([]);
    const [items, setItems] = React.useState([]);
    const [params, setParams] = React.useState({});
    const [companies, setCompanies] = React.useState({});
    const [prices, setPrices] = React.useState({});
    const [planOptions, setPlanOptions] = React.useState({});
    const [planFeatures, setPlanFeatures] = React.useState({});

    // on update items from CSG API
    const onUpdateItems = (items, init = false) => {
        if (init) {
            originalItemsRef.current = deepClone(items);

            const newCompanies = {};
            const newPrices = {};
            const planOptions = {};
            const planFeatures = {};
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

                // extact plan
                const plan = proxy['PLAN'];
                if (!planOptions[plan]) {
                    planOptions[plan] = {
                        label: plan,
                        count: 0
                    };
                }
                planOptions[plan].count++;

                // extract plan features
                const currentPlanFeatures = PlanFeatures[plan];
                console.log(currentPlanFeatures);
                (currentPlanFeatures || []).forEach((feature) => {
                    if (!planFeatures[feature]) {
                        planFeatures[feature] = {
                            label: feature,
                            count: 0
                        };
                    }
                    planFeatures[feature].count++;
                });

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
            setPlanOptions(planOptions);
            setPlanFeatures(planFeatures);
        }
        setItems(deepClone(items));
    };

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                    <Container>
                        {items.length > 0 && (
                            <React.Fragment>
                                <QuoteSubmissionForm
                                    onUpdate={(items, params) => {
                                        onUpdateItems(items, true);
                                        setParams(params);
                                    }}
                                    data={params}
                                />
                                <Grid container direction="row" spacing={2}>
                                    <Grid item xs={12} md={3}>
                                        <FilterContainer
                                            companies={companies}
                                            prices={prices}
                                            items={originalItemsRef.current}
                                            onUpdateItems={onUpdateItems}
                                            planOptions={planOptions}
                                            planFeatures={planFeatures}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={9}>
                                        <Grid container direction="column">
                                            {items.map((item, index) => (
                                                <Grid
                                                    item
                                                    key={`result-item-${index}`}>
                                                    <SuppResultItem
                                                        data={item}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        )}
                        {items.length === 0 && (
                            <VerticalLinearStepper
                                onUpdate={(items, params) => {
                                    onUpdateItems(items, true);
                                    setParams(params);
                                }}
                            />
                        )}
                    </Container>
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App;
