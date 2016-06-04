// Container: App

import React from 'react'

import Header from './Header'

const img_profile_photo = require('../static/img/profile-photo.jpg')

export default class App extends React.Component {

  render() {
    return(
        <div className="App">
          <Header logo={img_profile_photo} />
          <p>Hello React!</p>
        </div>
      )
  }

}