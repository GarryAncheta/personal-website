import { createTheme, ScopedCssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import Website from './Website';

const defaultFont = "'Julius Sans One', sans-serif";

const theme = createTheme({
  palette: 
  {
    mode: "dark",
    primary: 
    {
      main: '#00a4e6',
    },
    secondary: 
    {
      main: '#00212e',
    },
    background: 
    {
      default: '#1B3042'
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
