// Container: Layout

import Header from './Header'
import Contact from './Contact'

export default class Layout extends React.Component {

  render() {
    return (
        <div className="layout">
          <Header />
          <div className="container">
            {this.props.children}
          </div>
          <Contact />
        </div>
      ) 
  }

}