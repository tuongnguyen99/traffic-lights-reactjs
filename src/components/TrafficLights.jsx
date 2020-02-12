import React, { Component } from 'react';
import './TrafficLights.css';
var classNames = require('classnames');

class TrafficLights extends Component {
  render() {
    return (
      <div className="TrafficLights">
        <div className={classNames('bulb', 'bulb-red', { 'bulb-active': this.props.bulbActive === 'red' })}></div>
        <div className={classNames('bulb', 'bulb-yellow', { 'bulb-active': this.props.bulbActive === 'yellow' })}></div>
        <div className={classNames('bulb', 'bulb-green', { 'bulb-active': this.props.bulbActive  === 'green'})}></div>
      </div>
    );
  }
}

export default TrafficLights;