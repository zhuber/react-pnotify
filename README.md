# PNotify for React [![npm version](https://badge.fury.io/js/react-pnotify.svg)](https://badge.fury.io/js/react-pnotify)

<img src="http://i.imgur.com/rWh04yhr.png" />

# Overview
Beautiful JavaScript notification component for React. Many options and settings, including desktop notifications, etc.

# Options
- Animation (animateIn, animateOut)
- Error, Success, Notices, or Information notification types
- Desktop notifications
- Non-blocking
- Title
- Message
- Shadows
- Delayed transitions

# Live PNotify demos and examples
https://sciactive.github.io/pnotify/

# Animation
In order to use animation, you will need to include the Animate.css library:
https://daneden.github.io/animate.css/

```
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
</head>
```

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
    );
  }
}
```
