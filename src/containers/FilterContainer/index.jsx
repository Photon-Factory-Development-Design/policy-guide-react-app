import { Box } from '@material-ui/core';
import { FilterOption } from 'components';
import { PlanFeatures } from 'containers/QuoteSubmissionForm/options';
import { getProxy } from 'containers/SuppResultItem/proxy';
import React from 'react';
import { deepClone } from 'utils/array_utils';

const FilterContainer = ({
    companies,
    prices,
    planOptions,
    items,
    onUpdateItems,
    planFeatures
}) => {
    const [companyFilter, setCompanyFilter] = React.useState({ ALL: true });
    const [priceFilter, setPriceFilter] = React.useState({ ALL: true });
    const [planFilter, setPlanFilter] = React.useState({ ALL: true });
    const [featureFilter, setFeatureFilter] = React.useState({ ALL: true });
    // filter items according to filter options
    const filterItems = () => {
        let newItems = deepClone(items);

        // filter by company
        const filterCompanies = Object.keys(companyFilter).filter(
            (key) => companyFilter[key] === true
        );
        if (filterCompanies.indexOf('ALL') === -1) {
            newItems = newItems.filter((obj) =>
                filterCompanies.includes(getProxy(obj)['COMPANY_NAME'])
            );
        }

        // filter by plan
        const filterPlans = Object.keys(planFilter).filter(
            (key) => planFilter[key] === true
        );
        if (filterPlans.indexOf('ALL') === -1) {
            newItems = newItems.filter((obj) =>
                filterPlans.includes(getProxy(obj)['PLAN'])
            );
        }

        // filter by plan features
        const filterFeatures = Object.keys(featureFilter).filter(
            (key) => featureFilter[key] === true
        );
        if (filterFeatures.indexOf('ALL') === -1) {
            newItems = newItems.filter((obj) => {
                const plan = getProxy(obj)['PLAN'];
                const currentPlanFeature = PlanFeatures[plan];
                return filterFeatures.some((feature) =>
                    (currentPlanFeature || []).includes(feature)
                );
            });
        }

        // filter by price
        const filterPrices = Object.keys(priceFilter)
            .filter((key) => priceFilter[key] === true)
            .map((key) => (key !== 'ALL' ? prices[key] : 'ALL'));

        if (filterPrices.indexOf('ALL') === -1) {
            newItems = newItems.filter((obj) => {
                const proxy = getProxy(obj);
                const index = filterPrices.findIndex(
                    (price) =>
                        proxy['MONTHLY_RATE'] > price.min &&
                        (proxy['MONTHLY_RATE'] <= price.max ||
                            price.max === null)
                );

                return index >= 0;
            });
        }

        onUpdateItems(newItems);
    };

    React.useEffect(() => {
        filterItems();
    }, [companyFilter, priceFilter, planFilter, featureFilter]);

    return (
        <Box display="flex" flexDirection="column" my={2}>
            <FilterOption
                title="Companies"
                filter={companyFilter}
                setFilter={setCompanyFilter}
                filterItems={companies}
                renderer={(company) => `${company.label}(${company.count})`}
                totalLength={items.length}
            />

            <FilterOption
                title="Monthly Premium"
                filter={priceFilter}
                setFilter={setPriceFilter}
                filterItems={prices}
                renderer={(price) => `${price.label}(${price.count})`}
                totalLength={items.length}
            />

            <FilterOption
                title="Plan"
                filter={planFilter}
                setFilter={setPlanFilter}
                filterItems={planOptions}
                renderer={(plan) => `${plan.label}(${plan.count})`}
                totalLength={items.length}
            />

            <FilterOption
                title="Plan Features"
                filter={featureFilter}
                setFilter={setFeatureFilter}
                filterItems={planFeatures}
                renderer={(feature) => `${feature.label}(${feature.count})`}
                totalLength={items.length}
            />
        </Box>
    );
};

export default FilterContainer;
