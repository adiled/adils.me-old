// Container: Blog

import React from 'react'
import {Link} from 'react-router'
import '../semantic-ui/import'

import Intro from './Intro'


const img_profile_photo = require('../static/img/logo.png')

export default class About extends React.Component {

  render() {

    console.log(this.props)

    return(
        <div>
          <Intro />
          <div className="Blog wrap">

            <div className="blog-list">
              <div className="article-preview">
                <h1><Link to="/blog/1">Creating a portfolio application using ReactJS with Express + MongoDB</Link></h1>
                <p>Web application development certainly has a low enrtry barrier but...</p>
              </div>
              <div className="article-preview">
                <h1>Getting started with web application development</h1>
                <p>Web application development certainly has a low enrtry barrier but...</p>
              </div>
            </div>

          </div>
        </div>
      )
  }

}