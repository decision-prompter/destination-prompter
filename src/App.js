import React, { Component } from 'react';
import Homepage from './Homepage';
import './index.css'
import logo from './images/logo.png';
import logo2 from './images/logo2.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="startHere"><img className="logo" src={logo2} alt="logo"/></div>
        <Homepage />
      </div>

    );
  }
}

export default App;
