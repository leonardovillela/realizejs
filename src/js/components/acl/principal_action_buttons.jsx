var RequestHandlerMixin = require('realize/mixins/request_handler_mixin.jsx');
var PropTypes = require('prop-types');
var ModalRendererMixin = require('realize/mixins/modal_renderer_mixin.jsx');

window.PrincipalActionButtons = React.createClass({
  mixins: [RequestHandlerMixin, ModalRendererMixin],

  PropTypes: {
    className: PropTypes.string,
    handleOpenPrincipalModal: PropTypes.func,
    handleRemovePrincipal: PropTypes.func
  },

  getDefaultProps: function() {
    return {
      className: 'principal-action-buttons',
      handleAddPrincipal: null,
      handleRemovePrincipal: null
    }
  },

  render: function() {
    return (
      <div className={this.props.className}>
        {this.renderAddPrincipalButton()}
        {this.renderRemovePrincipalButton()}
        <div style={{'clear': 'both'}}></div>
      </div>
    )
  },

  renderRemovePrincipalButton: function() {
    var component = [];
    component.push(
      <Button
        name='Remover'
        onClick={this.props.handleRemovePrincipal}
      />
    );

    return component;
  },

  renderAddPrincipalButton: function() {
    var component = [];
    component.push(
      <Button
        name='Adicionar'
        onClick={this.props.handleOpenPrincipalModal}
      />
    );

    return component;
  }

});