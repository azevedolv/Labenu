import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './constants/theme'
import Router from './routes/Router'
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}
