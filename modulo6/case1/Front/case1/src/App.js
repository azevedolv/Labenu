import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Router from './routes/router'
import theme from './constants/theme';


function App() {
  return (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
  )
}

export default App