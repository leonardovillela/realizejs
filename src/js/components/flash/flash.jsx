var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var PropTypes = require('prop-types');
var ReactCSSTransitionGroup = require('react-transition-group');

window.Flash = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    type: PropTypes.oneOf(['info', 'warning', 'error', 'success']),
    message: PropTypes.node,
    dismissTimeout: PropTypes.number,
    canDismiss: PropTypes.bool,
    onDismiss: PropTypes.func,
    dismissed: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      type: 'info',
      dismissTimeout: -1,
      canDismiss: true,
      dismissed: false,
      message: '',
      onDismiss: function() {
        return true;
      }
    };
  },

  getInitialState: function() {
    return {
      themeClassKey: 'flash flash.' + this.props.type,
      dismissed: this.props.dismissed
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({dismissed: nextProps.dismissed});
  },

  componentDidMount: function() {
    if(this.props.dismissTimeout > 0) {
      this.setDismissTimeout();
    }
  },

  render: function() {
    return (
      <ReactCSSTransitionGroup
        transitionName="dismiss"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.state.dismissed ? '' : this.renderFlash()}
      </ReactCSSTransitionGroup>
    );
  },

  renderFlash: function() {
    return (
      <div className={this.className()} ref="flash">
        <FlashContent {...this.props} />
        {this.props.canDismiss ? <FlashDismiss {...this.props} onClick={this.dismiss} />: ''}
      </div>
    );
  },

  dismiss: function() {
    this.setState({dismissed: true});
    this.props.onDismiss();
  },

  setDismissTimeout: function() {
    setTimeout(function() {
      this.dismiss();
    }.bind(this), this.props.dismissTimeout);
  }
});
