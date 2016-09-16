import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './containers/Layout'
import About from './containers/About'
import Work from './containers/Work'
import Blog from './containers/Blog'
import Article from './containers/Article'
import Resume from './containers/Resume'


const styles = require('./styles/global.scss')

window.onload = ()=>{

  ReactDOM.render(
      <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={About} />
          <Route path="work" component={Work} />
          <Route path="blog" component={Blog} />
          <Route path="blog/:id" component={Article} />
        </Route>
      </Router>
      ,document.getElementById('app')
    )

}