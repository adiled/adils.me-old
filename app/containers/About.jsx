// Container: About

import React from 'react'
import { Link } from 'react-router'

import '../semantic-ui/import'

import Intro from './Intro'

const img_profile_photo = require('../static/img/logo.png')

export default class About extends React.Component {

  render() {

    return(
        <div>
          <Intro />
          <div className="About wrap">
            <h3 className="title">My Journey</h3>
            <p>I started out digging web based technologies back in 2010 and a year later fell in love with visual designing. Ever since I have been switching roles; starting from advertisement design all the way to brand identity design.
              <br/><br/>
              My passion for building presentable products and the love for web applications, led me to design and development of user interfaces</p>
            <div className="links">
              <Link to="resume">Resume</Link><Link to="resume">Skillset</Link>
            </div>
            <a className="ui button red">Get Free Consultancy</a>
          </div>
        </div>
      )
  }

}