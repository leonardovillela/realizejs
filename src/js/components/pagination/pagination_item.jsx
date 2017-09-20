var PropTypes = require('prop-types');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.PaginationItem = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    disabled: PropTypes.bool,
    active: PropTypes.bool,
    iconType: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      disabled: false,
      active: false,
      iconType: null,
      text: '',
      onClick: function(event) {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.buildThemeClassKey()
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.buildThemeClassKey(nextProps)
    });
  },

  buildThemeClassKey: function(props) {
    props = props || this.props;
    var themeClassKey = 'pagination.item';
    if(props.disabled) {
      themeClassKey += ' pagination.item.disabled';
    }

    if(props.active) {
      themeClassKey += ' pagination.item.active';
    }

    return themeClassKey;
  },

  render: function() {
    return (
      <li className={this.className()} onClick={this.handleClick}>
        <a href="#!">
          {this.props.text}
          {!!this.props.iconType ? this.renderIcon() : ''}
        </a>
      </li>
    );
  },

  renderIcon: function() {
    return <Icon type={this.props.iconType} />;
  },

  handleClick: function() {
    if(!this.props.disabled) {
      this.props.onClick();
    }
  }
});
