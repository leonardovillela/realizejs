var PropTypes = require('prop-types');

window.UpdatePermissionsButton = React.createClass({

  PropTypes: {
    name: PropTypes.string,
    className: PropTypes.string,
    clearTheme: PropTypes.bool,
    element: PropTypes.string,
    handleUpdatePermissions: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      name: 'Atualizar',
      className: 'btn waves-effect waves-grey button-modal ',
      clearTheme: true,
      element: 'a',
      handleUpdatePermissions: function() { return null }
    }
  },

  render: function() {
    return (
      <Button {...this.props}
        onClick={this.props.handleUpdatePermissions}
      />
    )
  }

});