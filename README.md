# PNotify for React [![Build Status](https://travis-ci.org/zhuber/react-pnotify.svg)](https://travis-ci.org/zhuber/react-pnotify) [![npm version](https://badge.fury.io/js/react-pnotify)](http://badge.fury.io/js/react-pnotify)

<img src="http://i.imgur.com/rWh04yhr.png" />

# Overview
Beautiful JavaScript notification component for React. Many options and settings, including desktop notifications, etc.

# Options
- Opacity
- Error, Success, Notices, or Information notification types
- Desktop notifications
- Non-blocking
- Title
- Message
- Shadows
- Delayed transitions

# Live PNotify demos and examples
https://sciactive.github.io/pnotify/

# Usage

```javascript
import { Notification } from 'react-pnotify';

class Demo extends React.Component {
  render() {
    return (
      <Notification
        type='notice'
        title='Notice example - Permanent'
        text='Helpful notice content goes here'
        animation='show'
        delay={2000}
        opacity={1}
        shadow={false}
        hide={false}
        nonblock={true}
        desktop={true}
      />
      <Notification
        type='success'
        title='Success example'
        text='Success message goes here'
        animation='pulse'
        delay={2000}
        opacity={1}
        shadow={false}
        hide={false}
        nonblock={false}
        desktop={false}
      />
      <Notification
        type='error'
        title='Error example'
        text='Error message goes here'
        animation='show'
        delay={2000}
        opacity={1}
        shadow={false}
        hide={false}
        nonblock={false}
        desktop={false}
      />
      <Notification
        type='info'
        title='Info example'
        text='Information message goes here'
        animation='pulse'
        delay={2000}
        opacity={1}
        shadow={false}
        hide={false}
        nonblock={false}
        desktop={false}
      />
    );
  }
}
```
