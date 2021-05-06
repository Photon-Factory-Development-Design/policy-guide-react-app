import { createMuiTheme } from '@material-ui/core';
import typography from './typography';
import palette from './palette';

const Theme = createMuiTheme({
    typography,
    palette,
    props: {
        MuiButton: {
            variant: 'contained'
        }
    },
    overrides: {
        MuiButton: {
            outlined: {
                borderRadius: '28px',
                minWidth: 200,
                '&:hover': {
                    borderColor: '#f00'
                },
                '&:focus': {
                    outline: 0
                }
            }
        }
    }
});

export default Theme;
