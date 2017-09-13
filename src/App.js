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
          <h2>PNotify for React</h2>
        </div>
        <p className="App-intro">
          Overview and examples: <a href="https://sciactive.github.io/pnotify/">https://sciactive.github.io/pnotify/</a>
        </p>
        <Notification
          type='notice'
          title='Notice example - Permanent'
          text='Helpful notice content goes here'
          delay={2000}
          shadow={false}
          hide={false}
          nonblock={true}
          desktop={true}
        />
        <Notification
          type='success'
          title='Success example'
          text='Success message goes here'
          animateIn='zoomInLeft'
          animateOut='zoomOutRight'
          delay={2000}
          shadow={false}
          hide={true}
          nonblock={false}
          desktop={false}
        />
        <Notification
          type='error'
          title='Error example'
          text='Error message goes here'
          animateIn='bounceInLeft'
          animateOut='bounceOutRight'
          delay={2500}
          shadow={true}
          hide={true}
          nonblock={false}
          desktop={false}
        />
        <Notification
          type='info'
          title='Info example'
          text='Information message goes here'
          animateIn='lightSpeedIn'
          animateOut='hinge'
          delay={3000}
          shadow={false}
          hide={true}
          nonblock={false}
          desktop={true}
        />
        <Notification
          type='info'
          title='Info example'
          text='Information message goes here'
          animateIn='flipInX'
          animateOut='flipOutY'
          delay={4000}
          shadow={true}
          hide={true}
          nonblock={false}
          desktop={false}
        />
      </div>
    );
  }
}

export default App;
