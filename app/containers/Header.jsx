// Container: Header

import React from 'react'

import Nav from '../components/Nav'

export default class Header extends React.Component {

  render(){
    return (
        <header className="header">
          <Nav />
        </header>
      )
  }

}