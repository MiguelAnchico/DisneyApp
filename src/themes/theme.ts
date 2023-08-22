import { Theme, createTheme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#0281FE',
    },
    secondary: {
      main: '#ffa726',
    },
    background: {
      default: '#151618',
      paper: '#272828',
    },
    text: {
      primary: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontWeight: 700,
      lineHeight: 1.28,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 300,
    },
    button: {
      fontWeight: 700,
    },
  },
});

export default theme;
