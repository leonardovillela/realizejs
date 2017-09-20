var PropTypes = require('prop-types');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.Label = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    active: PropTypes.bool,
    onClick: PropTypes.func,
    required: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      active: false,
      name: '',
      label: '',
      themeClassKey: 'label',
      required: false
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: this.getLabelThemeClassKey(this.props)
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      themeClassKey: this.getLabelThemeClassKey(nextProps)
    });
  },

  getLabelThemeClassKey: function(props) {
    var themeClassKey = props.themeClassKey;
    if(props.active) {
      themeClassKey += ' label.active';
    }

    return themeClassKey;
  },

  render: function() {
    var labelProp = this.props.label;
    if(typeof(labelProp) == "boolean" && !labelProp) {
      return <span />;
    }
    var text = (labelProp || this.props.name)
    if(this.props.required)
      text += ' *'

    return (
      <label htmlFor={this.props.id} onClick={this.props.onClick} className={this.className()}>
        {text}
      </label>
    );
  }
});
