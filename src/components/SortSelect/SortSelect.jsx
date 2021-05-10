import React from 'react';

// material ui components
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';

// jss
import styles from './sortSelectStyles';
import { useDeepCompareEffectNoCheck } from 'use-deep-compare-effect';

const sortOptions = [
    { label: 'Monthly Premium', value: 'MONTHLY_PREMIUM' },
    { label: 'Company', value: 'COMPANY_FULL_NAME' }
];

const SortSelect = ({ handleChange: propsHandleChange, classes }) => {
    const [option, setOption] = React.useState(sortOptions[0].value);

    const handleChange = (e) => {
        setOption(e.target.value);
    };

    useDeepCompareEffectNoCheck(() => {
        propsHandleChange && propsHandleChange(option);
    }, [option]);
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <Select
                id="sort-option-select"
                value={option}
                onChange={handleChange}>
                {sortOptions.map((option, index) => (
                    <MenuItem key={index} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default withStyles(styles)(SortSelect);
