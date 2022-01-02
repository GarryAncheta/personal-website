import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Website from './Website';
import './Website.css';

const defaultFont = "'Yanone Kaffeesatz', sans-serif";

const theme = createTheme({
  palette: 
  {
    mode: "dark",
    primary: 
    {
      main: '#E7AD75',
    },
    secondary: 
    {
      main: '#FDE74C',
    },
    background: 
    {
      default: '#171E2D'
    }
  },
  typography: 
  {
    fontFamily: defaultFont,
  },
  components:
  {
    MuiScopedCssBaseline:
    {
      styleOverrides:
      {
        root:
        {
          height: "100%", 
          width: "100%",
          position: "static",
        }
      }
    }
  }
})

ReactDOM.render(
  <ThemeProvider theme = { theme }>
    <ScopedCssBaseline>
      <Website />
    </ScopedCssBaseline>
  </ThemeProvider>
,
  document.getElementById('root')
);
