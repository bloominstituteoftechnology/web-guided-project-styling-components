// 👉 Importing React libs from node_modules folder
import React from 'react'
import { render } from 'react-dom'

// 👉 Importing a React component from another file
import App from './components/App'

// 👉 Importing our styles
import './styles.less'

render(
  <App />,
  document.querySelector('#root')
)
