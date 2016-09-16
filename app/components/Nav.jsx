// Componenent: Nav

import React from 'react'
import { Link } from 'react-router'
import Scroll from 'react-scroll'

var AnchorLink = Scroll.Link

export default class Nav extends React.Component {

  constructor(props) {
    super(props)
  }

  render(){
    return(
        <nav id="">
          <ul role="nav">
            <li><Link to="/">About</Link></li>
            <li><Link to="work" activeClassName="active">Work</Link></li>
            <li><Link to="blog" activeClassName="active">Blog</Link></li>
            <li><AnchorLink to="contact" smooth={true} duration={500} activeClassName="active">Contact</AnchorLink></li>
          </ul>
        </nav>
      )
  }

}
