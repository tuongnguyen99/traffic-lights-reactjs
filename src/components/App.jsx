import React, { Component } from 'react';
import TrafficLights from './TrafficLights';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulbColor: 'red'
    }

    setInterval(() => {
      this.setState({bulbColor: this.getNextColor()});
    }, 2000);
  }

  getNextColor(){
    switch(this.state.bulbColor){
      case 'red':
        return 'yellow';
      case 'yellow':
        return 'green';
      default: return 'red';
    }
  }
  
  render() {
    return (
      <div className="App">
        <TrafficLights bulbActive={this.state.bulbColor}/>
      </div>
    );
  }
}

export default App;