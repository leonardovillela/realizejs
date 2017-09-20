var PropTypes = require('prop-types');

window.InputSelectOption = React.createClass({
  propTypes: {
    name: PropTypes.string,
    value: PropTypes.node
  },

  render: function() {
    return <option value={this.props.value}>{this.props.name}</option>;
  }
});
