import React from 'react';

// material ui components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CompareCheckbox = ({
    handleChange: propsHandleChange,
    checked: propsChecked
}) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (e) => {
        propsHandleChange && propsHandleChange(e.target.checked);
    };

    React.useEffect(() => {
        setChecked(propsChecked);
    }, [propsChecked]);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name="Compare"
                />
            }
            label="Compare"
        />
    );
};

export default CompareCheckbox;
