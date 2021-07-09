import React from 'react';
import './assets/styles/base.scss';
import DateFnsUtils from '@date-io/date-fns';
import { FilterContainer, QuoteSubmissionForm } from 'containers';
import { Container, ThemeProvider, Grid, Box, Button } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import theme from 'theme';
import { deepClone } from 'utils/array_utils';
import { getProxy } from 'containers/SuppResultItem/proxy';
import VerticalLinearStepper from 'components/VerticalStepper';
import { PlanFeatures } from 'containers/QuoteSubmissionForm/options';
// import QuoteItem from 'components/QuoteItem/QuoteItem';
import SortSelect from 'components/SortSelect/SortSelect';
import PrintIcon from '@material-ui/icons/Print';
import CompareDrawer from 'components/CompareDrawer/CompareDrawer';
import Compare from 'components/Compare/Compare';
import QuotesList from 'containers/QuotesList/QuotesList';

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
    const contentRef = React.useRef(null);
    const [items, setItems] = React.useState([]);
    const [params, setParams] = React.useState({});
    const [companies, setCompanies] = React.useState({});
    const [prices, setPrices] = React.useState({});
    const [planOptions, setPlanOptions] = React.useState({});
    const [planFeatures, setPlanFeatures] = React.useState({});
    const [sortOption, setSortOption] = React.useState();
    const [compareItems, setCompareItems] = React.useState([]);
    const [showCompare, setShowCompare] = React.useState(false);

    const sortItems = (items, option) => {
        console.log('sortItems');
        // sort by option
        setItems(
            items.sort((a, b) => {
                const value1 = getProxy(a)[option],
                    value2 = getProxy(b)[option];
                if (value1 > value2) return 1;
                else if (value1 === value2) return 0;
                else return -1;
            })
        );
    };
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
        // sort items
        sortItems(deepClone(items), sortOption);
    };

    const handleChange = (option) => {
        setSortOption(option);
        sortItems(items, option);
    };

    const onChangeCompareItems = React.useCallback((item, checked) => {
        console.log('onCangeCompareItems');
        setCompareItems((prev) => {
            if (checked === true) {
                return [...prev, item];
            } else {
                return prev.filter((obj) => obj.key !== item.key);
            }
        });
    }, []);

    return (
        <React.Fragment>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={theme}>
                    <Box bgcolor="background.darkBlue">
                        <div
                            hidden={showCompare || items.length === 0}
                            style={{ overflow: 'hidden' }}>
                            <Container>
                                {items.length > 0 && (
                                    <React.Fragment>
                                        <div className="no-print">
                                            <QuoteSubmissionForm
                                                onUpdate={(items, params) => {
                                                    onUpdateItems(items, true);
                                                    setParams(params);
                                                }}
                                                data={params}
                                            />
                                            <Box
                                                display="flex"
                                                flexDirection="row"
                                                justifyContent="flex-end"
                                                bgcolor="background.primary"
                                                px={2}>
                                                <Button
                                                    variant="text"
                                                    onClick={() =>
                                                        window.print()
                                                    }>
                                                    <PrintIcon size={20} />
                                                    Print
                                                </Button>
                                                <SortSelect
                                                    handleChange={handleChange}
                                                />
                                            </Box>
                                            <Grid
                                                container
                                                direction="row"
                                                spacing={2}>
                                                <Grid item xs={12} md={3}>
                                                    <FilterContainer
                                                        companies={companies}
                                                        prices={prices}
                                                        items={
                                                            originalItemsRef.current
                                                        }
                                                        onUpdateItems={
                                                            onUpdateItems
                                                        }
                                                        planOptions={
                                                            planOptions
                                                        }
                                                        planFeatures={
                                                            planFeatures
                                                        }
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={9}>
                                                    <Grid
                                                        container
                                                        direction="column"
                                                        style={{
                                                            height: '100%'
                                                        }}>
                                                        <div
                                                            ref={contentRef}
                                                            style={{
                                                                height: '100%',
                                                                minHeight:
                                                                    '800px'
                                                            }}>
                                                            <QuotesList
                                                                items={items}
                                                                compareItems={
                                                                    compareItems
                                                                }
                                                                onChangeCompareItems={
                                                                    onChangeCompareItems
                                                                }
                                                            />
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </React.Fragment>
                                )}
                            </Container>
                        </div>
                    </Box>
                    {/* {items.length > 0 && (
                        <div className="print">
                            <Grid container direction="column">
                                <div ref={contentRef}>
                                    {items.map((item, index) => (
                                        <Grid item key={`result-item-${index}`}>
                                            <QuoteItem
                                                canCompare={
                                                    compareItems.length < 3
                                                }
                                                index={index}
                                                onChangeCompareItem={
                                                    onChangeCompareItems
                                                }
                                                quote={item}
                                                compareSelected={compareItems
                                                    .map((obj) => obj.key)
                                                    .includes(item.key)}
                                            />
                                        </Grid>
                                    ))}
                                </div>
                            </Grid>
                        </div>
                    )} */}
                    {!showCompare && (
                        <Box bgcolor="background.darkBlue">
                            <Container>
                                {items.length === 0 && (
                                    <VerticalLinearStepper
                                        onUpdate={(items, params) => {
                                            onUpdateItems(items, true);
                                            setParams(params);
                                        }}
                                    />
                                )}
                            </Container>
                        </Box>
                    )}
                    {!showCompare && (
                        <CompareDrawer
                            open={compareItems.length}
                            compareItems={compareItems}
                            onClose={() => setCompareItems([])}
                            onCompare={() => setShowCompare(true)}
                        />
                    )}

                    {showCompare && (
                        <Compare
                            onHideCompare={() => {
                                setShowCompare(false);
                                setCompareItems([]);
                            }}
                            compareItems={compareItems}
                        />
                    )}
                </ThemeProvider>
            </MuiPickersUtilsProvider>
        </React.Fragment>
    );
}

export default App;
