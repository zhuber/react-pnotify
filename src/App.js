import './App.css';

import React, { Component } from 'react';

import Notification from 'components/Notification';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Notification
          type='notice'
          title='Notice test - Permanent'
          text='Helpful information goes here'
          animation='show'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={false}
          desktop={true}
        />
        <Notification
          type='error'
          title='Error test'
          text='Error message goes here'
          animation='show'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={true}
          nonblock={false}
          desktop={false}
        />
      </div>
    );
  }
}

export default App;
