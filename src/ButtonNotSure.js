import React, {Component} from 'react';
import './ButtonNotSure.css'

export default class ButtonLetsGo extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return (
      <div>
        <button className="goButton1">
          <i className="goButtonLogo1 material-icons">cancel</i>
          <br/>I'm still <br/> not sure
        </button>
      </div>
    )
  }

}
