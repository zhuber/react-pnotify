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
          styling='brighttheme'
          title='Notice example - Permanent'
          text='Helpful notice content goes here'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={true}
          desktop={true}
        />
        <Notification
          type='success'
          styling='brighttheme'
          title='Success example'
          text='Success message using brighttheme'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={false}
          desktop={false}
        />
        <Notification
          type='error'
          styling='brighttheme'
          title='Error example'
          text='Error message using brighttheme'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={false}
          desktop={false}
        />
        <Notification
          type='info'
          styling='bootstrap3'
          title='Info example'
          text='Information message using bootstrap'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={false}
          desktop={false}
        />
        <Notification
          type='info'
          styling='fontawesome'
          title='Info example'
          text='Information message using fontawesome'
          delay={2000}
          opacity={1}
          shadow={false}
          hide={false}
          nonblock={false}
          desktop={false}
        />
      </div>
    );
  }
}

export default App;
