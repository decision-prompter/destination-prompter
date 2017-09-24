import React, {Component} from 'react';
import './ButtonLetsGo.css'

export default class ButtonLetsGo extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <button className="goButton">
          <i className="goButtonLogo material-icons">airplanemode_active</i>
          <br/>Let's Go!
        </button>
      </div>
    )
  }

}
