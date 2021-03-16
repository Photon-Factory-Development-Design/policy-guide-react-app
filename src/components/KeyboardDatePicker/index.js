import React from 'react';
import { KeyboardDatePicker as MuiKeyboardDatePicker } from '@material-ui/pickers';
import TextField from 'components/TextField';

const KeyboardDatePicker = ({
    /*submitted,
    name,
    required,
    onValidated,*/
    ...props
}) => {
    return <MuiKeyboardDatePicker {...props} TextFieldComponent={TextField} />;
};

export default KeyboardDatePicker;
