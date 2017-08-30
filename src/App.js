import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LocationContainer from './LocationContainer.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      secondDate: new Date()
    };
  }

  componentDidMount = () => {
    this.timerID = setInterval( 
      () => this.tick(), 1000
    );
  }

  componentWillUnmount = () => {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="time-container">
        <LocationContainer place="Atlanta" time={this.state.date.toLocaleTimeString('en-us', {timeZone:'America/New_York'})}/>
        <LocationContainer place="France" time={this.state.date.toLocaleTimeString('en-us', {timeZone:'Europe/Paris'})}/>
        <LocationContainer place="Sydney" time={this.state.date.toLocaleTimeString('en-us', {timeZone:'Australia/Sydney'})}/>
        <LocationContainer place="Tokyo" time={this.state.date.toLocaleTimeString('en-us', {timeZone:'Asia/Tokyo'})}/>
      </div>
    );
  }

  
}

export default App;
