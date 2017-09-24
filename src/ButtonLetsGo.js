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
        <button className="goButton" onClick={this.props.addButtonClick}>
          <i className="goButtonLogo material-icons">work</i>
          <br/>Let's Go!
        </button>
      </div>
    )
  }

}
