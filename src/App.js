import React, { Component } from 'react';
import Homepage from './Homepage';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="startHere"><i className="material-icons">place</i> Start-Here</div>
        <Homepage />
      </div>

    );
  }
}

export default App;
