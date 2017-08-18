import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class ProjectList extends Component {
  constructor(props){
    super(props)
    this.state = {adding:false, editIndex: 1}
    this.onNewProject = this.onNewProject.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this)
  }

  onNewProject() {
    this.setState({editIndex: this.props.store.projectCount });
    this.props.store.addProject('');
  }  

  updateName(value) {
    this.props.store.projects[this.state.editIndex].name = value
  }

  onKeyUp(event) {
    this.updateName(event.target.value)
  }

  getProjectComponent(project, index)  {
    if (this.state.editIndex == index) {
      return ( <li key={index}><input onKeyUp={this.onKeyUp} /></li>)
    }
    return <li key={index}>{project.name}</li>;
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <div className="project-list">
            <ul>
            {store.projects.map((p,index) => this.getProjectComponent(p, index))}
            </ul>
            Project count: {this.props.store.projectCount}

            <button onClick={ this.onNewProject }>New Project</button>

        </div>

      </div>
    );
  }
}