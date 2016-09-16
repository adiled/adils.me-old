// Component: ProjectDetails

const img_profile_photo = require('../static/img/logo.png')

export default class ProjectExplorer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
        <div className="project-explorer">
          <div className="head">
            <div className="logo">
              <img src={img_profile_photo} />
              <p>{this.props.data.title}</p>
            </div>
          </div>
        </div>
      )

  }

}