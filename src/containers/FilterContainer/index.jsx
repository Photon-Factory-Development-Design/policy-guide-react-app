import { Box } from '@material-ui/core';
import { FilterOption } from 'components';
import { getProxy } from 'containers/SuppResultItem/proxy';
import React from 'react';
import { deepClone } from 'utils/array_utils';

const FilterContainer = ({ companies, prices, items, onUpdateItems }) => {
    const [companyFilter, setCompanyFilter] = React.useState({ ALL: true });
    const [priceFilter, setPriceFilter] = React.useState({ ALL: true });
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
    }, [companyFilter, priceFilter]);

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
        </Box>
    );
};

export default FilterContainer;
