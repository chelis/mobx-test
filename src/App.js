import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProjectList from './ProjectList';
// import logo from './logo.svg';
// import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">         
          <h2>Todo list</h2>
          <ProjectList store={this.props.store} />


        </div>
      </div>
    );
  }
}

export default App;
