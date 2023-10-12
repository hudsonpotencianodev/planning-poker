import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const customTheme = {
  palette: {
    primary: {
      main: '#88d110',
    },
    secondary: {
      main: '#222222',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: "#222222",
      secondary: "#373737",
    },
    action: {
      active: "#FFF"
    }
  },
  typography: {
    fontFamily: 'Poppins'
  }
};
export const theme = createMuiTheme(customTheme);
