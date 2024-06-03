import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#567899',
    },
    background: {
      default: '#073262',
      paper: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#9b9b9b',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Poppins',
    },
    h2: {
      fontFamily: 'Poppins',
    },
    h3: {
      fontFamily: 'Poppins',
    },
    h4: {
      fontFamily: 'Poppins',
    },
    button: {
      fontFamily: 'Poppins',
    },
    body1: {
      fontFamily: 'Poppins',
    },
    body2: {
      fontFamily: 'Poppins',
    },
    caption: {
      fontFamily: 'Poppins',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1100,
      xl: 1800,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: '1900px !important',
          paddingLeft: '60px !important',
          paddingRight: '60px !important',
        },
        maxWidthXl: {
          paddingLeft: '150px !important',
          paddingRight: '150px !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        contained: {
          color: '#fff',
        },
      },
    },
  },
});

export default theme;
