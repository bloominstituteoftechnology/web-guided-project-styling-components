// This is for the fake API. Do not delete!
import { worker } from './api-mocks/browser'
worker.start()

import React from 'react'
import { render } from 'react-dom'

import App from './components/App'

import './styles.css'

render(
  <App />,
  document.querySelector('#root')
)
