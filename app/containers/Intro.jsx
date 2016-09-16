// Container: Intro

import React from 'react'

import '../semantic-ui/import'

// const img_background_image = require('../static/img/intro-bg.jpg')

export default class Intro extends React.Component {

  render() {

    return(
        <div className="Intro">
          <div className="content">
            <h1>Muhammad Adil Shaikh</h1>
            <div className="sub">
              <div className="seam"></div>
              <h2>Product Designer and Full Stack Developer</h2>
              <div className="seam"></div>
            </div>
          </div>
          <div className="clr"></div>
          
        </div>
      )
  }

}