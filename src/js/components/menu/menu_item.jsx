var PropTypes = require('prop-types');

window.MenuItem = React.createClass({
  propTypes: {
    icon: PropTypes.string,
    iconAlign: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    onClick: PropTypes.object,
    className: PropTypes.string,
    method: PropTypes.string,
    element: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      iconAlign: 'left',
      method: 'get',
      element: 'a'
    };
  },

  render: function() {
    return (
      <li>
        <Button {...this.props} clearTheme={true} name={this.props.text} />
      </li>
    );
  }
});
