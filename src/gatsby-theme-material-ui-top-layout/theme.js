import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Euphoria Script',
      'cursive'
    ].join(','),
    body1: {
      fontFamily: 'Glegoo'
    }
  }
});

export default theme;