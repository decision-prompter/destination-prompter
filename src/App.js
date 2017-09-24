import React, { Component } from 'react';
import Homepage from './Homepage';
import './index.css'
import logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="startHere"><img className="logo" src={logo} alt="logo"/>Start Here</div>
        <Homepage />
      </div>

    );
  }
}

export default App;
