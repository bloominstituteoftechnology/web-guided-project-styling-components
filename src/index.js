// This is for the fake API. Do not delete!
import { worker } from './api-mocks/browser'
worker.start()

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import './styles.css'

import { ThemeProvider } from "styled-components";
import theme from "./theme";

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  ,
  document.querySelector('#root')
)
