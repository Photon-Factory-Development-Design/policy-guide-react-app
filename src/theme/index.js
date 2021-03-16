import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import palette from './palette';

console.log(typography);
const Theme = createMuiTheme({
    typography,
    palette,
    props: {
        MuiButton: {
            variant: 'contained'
        }
    },
    overrides: {}
});

export default Theme;
