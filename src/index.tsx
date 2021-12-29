import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Website from './Website';
import './Website.css';

const defaultFont = "'Licorice', cursive"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: '#2D429B',
    },
    secondary: {
      main: '#2D429B',
    },
    background: {

    }
  },
  typography: {
    fontFamily: defaultFont,
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Website />
  </ThemeProvider>
,
  document.getElementById('root')
);
