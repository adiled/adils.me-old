import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './containers/App'

const styles = require('./styles/global.scss')

window.onload = ()=>{
  ReactDOM.render(
      <App />,
      document.getElementById('app')
    )
}