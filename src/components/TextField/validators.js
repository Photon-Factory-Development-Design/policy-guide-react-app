const Required = (value) => {
    if (
        (!value && value !== 0) ||
        (typeof value === 'string' && value === '')
    ) {
        return 'This field is required';
    }
};
const CityStateZip = (value) => {
    const addresses = value.split(',');
    if (addresses.length !== 3) {
        return 'Invalid address';
    }
};

const AgeCheck = (value) => {
    if (value < 65) {
        return 'Unfortunately the software can only generate quotes of individuals that are age 65 and older.  All others need to call to speak to one of our licensed agents.';
    }
};

export { Required, CityStateZip, AgeCheck };
