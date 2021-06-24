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
                    borderColor: '#F15924',
                    backgroundColor: '#F15924'
                },
                '&:focus': {
                    outline: 0
                }
            },
            contained: {
                '&:hover': {
                    borderColor: '#F15924',
                    backgroundColor: '#F15924'
                }
            }
        },
        MuiPaper: {
            root: {
                // backgroundColor: 'undef'
            }
        }
    }
});

export default Theme;
