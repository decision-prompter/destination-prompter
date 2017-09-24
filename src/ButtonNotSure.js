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
          <i className="goButtonLogo material-icons"></i>
          <br/>I'm still <br/> not sure
        </button>
      </div>
    )
  }

}
