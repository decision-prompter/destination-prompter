import React, { Component } from 'react';
import './index.css';
import timeOfYear1 from './images/timeOfYear1.jpg';
import timeOfYear2 from './images/timeOfYear2.jpg';
import climate1 from './images/climate1.jpg';
import climate2 from './images/climate2.jpg';
import price1 from './images/price1.jpg';
import price2 from './images/price2.jpg';
import landscape1 from './images/landscape1.jpg';
import landscape2 from './images/landscape2.jpg';
import data from './final_output.json';
import ButtonLetsGo from './ButtonLetsGo';
import ButtonNotSure from './ButtonNotSure';


var userChoice = {
  timeOfYear: null,
  climate: null,
  price: null,
  landscape:null,
}

var dimensions = {
  timeOfYear: {
    timeOfYear1: {
      url:timeOfYear1,
      value:'S',
      valueText:"Summer"
    },
    timeOfYear2: {
      url:timeOfYear2,
      value:'W',
      valueText:"Winter"
    }
  },
  climate: {
    climate1: {
      url:climate1,
      value:'H',
      valueText:"Hot"
    },
    climate2: {
      url:climate2,
      value:'C',
      valueText:"Cold"
    }
  },
  price: {
    price1: {
      url:price1,
      value:'S',
      valueText:"Smaller Budget"
    },
    price2: {
      url:price2,
      value:'I',
      valueText:"Bigger Budget"
    }
  },
  landscape: {
    landscape1: {
      url:landscape1,
      value:'C',
      valueText:"A City"
    },
    landscape2: {
      url:landscape2,
      value:'N',
      valueText:"A natural environment"
    }
  }
}

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: false,
      userChoice: {
        timeOfYear: null,
        climate: null,
        price: null,
        landscape:null,
      },
      currentChoice: {
        promptMessage:"When would you like to leave?",
        option1:dimensions.timeOfYear.timeOfYear1,
        option2:dimensions.timeOfYear.timeOfYear2,
        dimension:'timeOfYear'
      }
    }
  }

  _handleClick = (selectedOption) => {
    let {currentChoice} = this.state
    if(currentChoice.dimension === 'timeOfYear') {
      userChoice.timeOfYear = selectedOption;
      this.setState({
        currentChoice: {
          promptMessage:"Are you looking for hot or cold?",
          option1:dimensions.climate.climate1,
          option2:dimensions.climate.climate2,
          dimension:'climate'
        }
      })
    }
    else if(currentChoice.dimension === 'climate') {
      userChoice.climate = selectedOption;
      this.setState({
        currentChoice: {
          promptMessage:"Is your budget big or small?",
          option1:dimensions.price.price1,
          option2:dimensions.price.price2,
          dimension:'price'
        }
      })
    }
    else if(currentChoice.dimension === 'price') {
      userChoice.price = selectedOption;
      this.setState({
        currentChoice: {
          promptMessage:"Do you prefer an urban setting or a rural one?",
          option1:dimensions.landscape.landscape1,
          option2:dimensions.landscape.landscape2,
          dimension:'landscape'
        }
      })
    }
    else if(currentChoice.dimension === 'landscape') {
      userChoice.landscape = selectedOption;
      var filteredData = data.filter((location) => {
        if (
          location['Time of Year'] === userChoice.timeOfYear &&
          location.Climate === userChoice.climate &&
          location.Price === userChoice.price &&
          location.Landscape === userChoice.landscape
        ){
          return true;
        }
        return false;
      })
      this.setState({
        destination:{
          promptMessage:"Choose the city you like best:",
          option1:filteredData[0],
          option2:filteredData[1]
        }
      })
    }
  }

  _handleChoice = (chosenCity) => {
    this.setState({
      buttons:true,
      chosenCity:chosenCity
    })
  }

  render() {
    let { currentChoice } = this.state
    let { destination } = this.state
    console.log(this.state.chosenCity);
    return (
      <div>
        { !destination ?
          <div className="imageSection">
            <div className="prompt">{currentChoice.promptMessage}</div>
            <div>
              <div className="box row">
                <h2>{currentChoice.option1.valueText}</h2>
                <img className="box col-small-6" src={currentChoice.option1.url} onClick={() => this._handleClick(currentChoice.option1.value)} alt="option1"/>
              </div>
              <div className="box row">
                <h2>{currentChoice.option1.valueText}</h2>
                  <img className="box col-small-6" src={currentChoice.option2.url} onClick={() => this._handleClick(currentChoice.option2.value)} alt="option2"/>
              </div>
            </div>
          </div> : (!this.state.buttons ?
            <div className="imageSection">
              <div className="prompt">{destination.promptMessage}</div>
              <div className="row">
                <h2>{destination.option1.City}, {destination.option1.Country}</h2>
                <img className="box col-small-6" src={destination.option1.url} onClick={() => this._handleChoice(destination.option1.City)} alt="option1"/>
                <h2>{destination.option2.City}, {destination.option2.Country}</h2>
                <img className="box col-small-6"  src={destination.option2.url} onClick={() => this._handleChoice(destination.option2.City)} alt="option2"/>
              </div>
            </div> :
            <div className="imageSection">
              <div className="row"><a href={`https://www.expedia.ca/Hotel-Search?destination=${this.state.chosenCity}`}><ButtonLetsGo className="box col-small-6"/></a></div>
              <div className="row"><ButtonNotSure className="box col-small-6"/></div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Homepage;
