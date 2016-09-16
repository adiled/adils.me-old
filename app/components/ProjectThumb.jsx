// Component: ProjectThumb

export default class ProjectThumb extends React.Component {

  render(){

    return(

        <div id={'thumb-'+this.props.data.id} className="thumb" style={{backgroundColor: this.props.data.backgroundColor}} onClick={(evt)=>this.props.click(evt)}>
          <div className="content">
            <div className="logo">{this.props.data.title}</div>
          </div>
        </div>

      )

  }
}