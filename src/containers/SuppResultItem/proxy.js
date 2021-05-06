export const fields = {
    PARENT: {
        label: 'Parent: ',
        fn: (data) => data.company_base.parent_company_base?.name
    },
    PLAN: { label: 'Plan: ', fn: (data) => data.plan },
    YEARS_IN_MARKET: {
        label: 'Years in Market: ',
        fn: (data) =>
            new Date().getFullYear() - data.company_base.established_year
    },
    AM_BEST_RATING: {
        label: 'AM Best Rating: ',
        fn: (data) => data.company_base?.ambest_rating
    },
    S_P_RATING: {
        label: 'S&P Rating: ',
        fn: (data) => data.company_base?.sp_rating
    },
    EFFECTIVE_DATE: {
        label: 'Effective Date: ',
        fn: (data) => data.effective_date
    },
    RATE_TYPE: { label: 'Rate Type: ', fn: (data) => data.rate_type },
    RATING_CLASS: { label: 'Rating Class: ', fn: (data) => data.rating_class },
    MONTHLY_RATE: {
        label: 'Monthly Rate: ',
        fn: (data) => data.rate?.month / 100,
        show: false
    },
    COMPANY_FULL_NAME: {
        label: 'Company Name: ',
        show: false,
        fn: (data) => data.company_base?.name_full
    },
    COMPANY_NAME: {
        label: 'Company Name: ',
        show: false,
        fn: (data) => data.company_base?.name
    },
    DISCOUNT: {
        label: 'Discount',
        show: false,
        fn: (data) => data.discounts && data.discounts[0]?.value * 100
    }
};

const handler = {
    get: function (target, prop) {
        if (fields[prop]) {
            return fields[prop].fn(target);
        }
        return Reflect.get(...arguments);
    }
};

export const getProxy = (target) => new Proxy(target, handler);
