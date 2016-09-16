import '../semantic-ui/import'

import SocialNav from '../components/SocialNav'

export default class Contact extends React.Component {

  render(){

    var data = [
      {name: 'Twitter', url: 'http://www.twitter.com/md_addy'},
      {name: 'GitHub', url: 'http://www.github.com/m-adilshaikh'},

    ]

    return (
      <div id="contact" className="Contact wrap">
        <h3>Get In Touch</h3>
        <form className="ui form">
          <div className="field">
            <input type="text" name="name" placeholder="Your Name"></input>
          </div>
          <div className="field">
            <input type="email" name="email" placeholder="Your Email"></input>
          </div>
          <div className="field">
            <textarea type="text" name="message" placeholder="Just say it!"></textarea>
          </div>
          <button className="ui button white big" type="submit">Send</button>
        </form>  

        <SocialNav items={data} />
      </div>
    )
  }

}