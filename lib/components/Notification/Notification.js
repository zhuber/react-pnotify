'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('pnotify/dist/pnotify.buttons.js');

require('pnotify/dist/pnotify.desktop.js');

require('pnotify/dist/pnotify.mobile.js');

require('pnotify/dist/pnotify.nonblock.js');

require('pnotify/dist/pnotify.animate.js');

require('pnotify/dist/pnotify.css');

require('pnotify/dist/pnotify.buttons.css');

require('pnotify/dist/pnotify.brighttheme.css');

require('pnotify/dist/pnotify.mobile.css');

require('pnotify/dist/pnotify.nonblock.css');

var _pnotify = require('pnotify');

var _pnotify2 = _interopRequireDefault(_pnotify);

var _propTypes = require('prop-types');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isReady = function isReady() {
  return typeof window !== 'undefined';
};

var readyCheck = void 0;

var Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this._renderPNotify = _this._renderPNotify.bind(_this);
    _this.state = {
      ready: isReady(),
      widget: null
    };

    if (!_this.state.ready) {
      readyCheck = setInterval(_this._updateReadyState.bind(_this), 1000);
    }
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.ready) {
        this._renderPNotify();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var render = this.props;

      if (render === 'explicit' && this.state.ready && !prevState.ready) {
        this._renderPNotify();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(readyCheck);
    }
  }, {
    key: '_updateReadyState',
    value: function _updateReadyState() {
      if (isReady()) {
        this.setState({
          ready: true
        });

        clearInterval(readyCheck);
      }
    }
  }, {
    key: '_renderPNotify',
    value: function _renderPNotify() {
      var pnotifyOptions = Object.assign({}, this.props);
      if (pnotifyOptions.animateIn && pnotifyOptions.animateOut) {
        pnotifyOptions.animate = {
          animate: true,
          in_class: pnotifyOptions.animateIn,
          out_class: pnotifyOptions.animateOut
        };
      }
      // Remove temporary swap props.
      if (pnotifyOptions.animateIn) {
        delete pnotifyOptions.animateIn;
      }
      if (pnotifyOptions.animateOut) {
        delete pnotifyOptions.animateOut;
      }
      var widget = new _pnotify2.default(pnotifyOptions);
      this.setState({ widget: widget });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'pnotify-empty' });
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  type: _propTypes.PropTypes.string,
  title: _propTypes.PropTypes.string,
  text: _propTypes.PropTypes.string,
  animateIn: _propTypes.PropTypes.string,
  animateOut: _propTypes.PropTypes.string,
  delay: _propTypes.PropTypes.number,
  shadow: _propTypes.PropTypes.bool,
  hide: _propTypes.PropTypes.bool,
  nonblock: _propTypes.PropTypes.bool,
  desktop: _propTypes.PropTypes.bool
};
Notification.defaultProps = {
  type: 'notice',
  title: '',
  text: '',
  animateIn: '',
  animateOut: '',
  delay: 2000,
  shadow: true,
  hide: true,
  nonblock: true,
  desktop: true
};
exports.default = Notification;