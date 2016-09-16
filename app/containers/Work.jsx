// Container: Work
// * Stateful


import WorkList from '../components/WorkList'
import ProjectExplorer from '../components/ProjectExplorer'

export default class Work extends React.Component {

  constructor(props) {
    super(props)

    this._handleChange = this._handleChange.bind(this)

    this.state = {
      expandedProject: Object
    }
  }

  _handleChange(event) {
    let $target = $(event.currentTarget)
    switch(event.type) {
    
    case 'click':

      // Work list thumb click
      if($target.hasClass('thumb')){
        let id = $target.attr('id').slice(-1)
        this._setExpandedProject(id)
      }

      break;

    }
  }

  _getWorkList() {
    const workList = [
      {id: 1, title: 'Hoedlgut', tag: 'Wordpress Development'},
      {id: 2, title: 'SkillPay', tag: 'Landing Page Design', backgroundColor: '#efefef'},
      {id: 3, title: 'Shaan e Pakistan', tag: 'Identity Design', backgroundColor: '#efefef'},
      {id: 4, title: 'Jalebi', tag: 'Identity Design'},
      {id: 5, title: 'Pakore', tag: 'Identity Design'},
      {id: 6, title: 'Lassi', tag: 'Identity Design'}
    ]
    return workList
  }

  _setExpandedProject(id) {
    let project = this._getWorkList().filter((obj)=>{
      if (obj.id == id)
        return obj
    })[0]

    this.setState({
      expandedProject: project
    })
  }

  componentDidMount() {

    this._setExpandedProject(1)

    console.table(this.state.expandedProject)
  }

  render() {

    return (
        <div className="work wrap">
          <p>{this.workList}</p>
          <WorkList list={this._getWorkList()} handleChange={this._handleChange} />
          <ProjectExplorer data={this.state.expandedProject} />
        </div>
      ) 

  }

}