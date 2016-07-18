'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _prop_types = require('../../prop_types');

var _prop_types2 = _interopRequireDefault(_prop_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LabelPermission = (_temp = _class = function (_Component) {
  _inherits(LabelPermission, _Component);

  function LabelPermission() {
    _classCallCheck(this, LabelPermission);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(LabelPermission).apply(this, arguments));
  }

  _createClass(LabelPermission, [{
    key: 'renderLabel',
    value: function renderLabel() {
      var component = [];
      var permissions = this.props.value;

      if (permissions.length === 0) {
        component.push(_react2.default.createElement(
          'div',
          null,
          ' - '
        ));
      } else {
        permissions.forEach(function (permission) {
          component.push(_react2.default.createElement(
            'div',
            null,
            I18n.t('permissions.' + permission)
          ));
        });
      }

      return component;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        this.renderLabel()
      );
    }
  }]);

  return LabelPermission;
}(_react.Component), _class.propTypes = {
  className: _prop_types2.default.string
}, _class.defaultProps = {
  className: ''
}, _temp);
exports.default = LabelPermission;