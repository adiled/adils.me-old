export default class Article extends React.Component {

  

  render() {
    return (
      <div className="wrap">
        <p>asdasd</p>
        <p class>{this.props.params.id}</p>
      </div>
    )
  }

}