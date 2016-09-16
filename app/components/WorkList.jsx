// Component: WorkList

import ProjectThumb from './ProjectThumb'

import '../semantic-ui/components/grid.min.css'

export default class WorkList extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    const thumbs = this.props.list.map((item)=>{
      return (
        <div key={item.id} className="column">
          <ProjectThumb data={item} click={this.props.handleChange}></ProjectThumb>
        </div>
        )
    })

    return (
        <div className="work-list">
          <div className="ui three column relaxed grid stackable">
            {thumbs}
          </div>
        </div>
      )
  }
}