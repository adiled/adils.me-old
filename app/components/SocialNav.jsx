// Component: SocialNav

import {Link} from 'react-router'

export default class SocialNav extends React.Component {

  render() {

    let renderItems = ()=> {
      let items = this.props.items
      return items.map((item, key)=>{
        return (
          <Link to={item.url} target="_blank"><i key={key} className={'icon large  '+item.name.toLowerCase()} /></Link>
          )
      })
    }


    return (
        <div className="social">
          {renderItems()}
        </div>
      )

  }

}