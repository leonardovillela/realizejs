window.CloseModalButton = React.createClass({
  PropTypes: {
    name: PropTypes.string,
    className: PropTypes.string,
    clearTheme: PropTypes.bool,
    element: PropTypes.string,
    modalId: PropTypes.string
  },

  getDefaultProps: function() {
    return {
      name: 'Fechar',
      className: 'btn waves-effect waves-light close-button grey lighten-4',
      clearTheme: true,
      element: 'a'
    }
  },

  render: function() {
    return (
      <Button {...this.props} onClick={this.closeModal} />
    )
  },

  closeModal: function() {
    if (!!this.props.modalId){
     $('#'+this.props.modalId).closeModal()
    }
  }

});