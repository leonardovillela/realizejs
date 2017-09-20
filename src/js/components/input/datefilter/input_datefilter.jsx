var PropTypes = require('prop-types');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.InputDatefilter = React.createClass({
  mixins: [CssClassMixin],
  propTypes: {
    originalId: PropTypes.string,
    originalName: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    resource: PropTypes.string,
    disabled: PropTypes.bool,
    fromFilterInput: PropTypes.object,
    toFilterInput: PropTypes.object,
    okButton: PropTypes.object
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'input.datefilter',
      disabled: false
    };
  },

  getInitialState: function() {
    return {
      selectedDates: []
    }
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
        <InputDatefilterSelect
          {...this.propsWithoutCSS()}
          selectedDates={this.state.selectedDates}
          onFocus={this.showFilterBody}
        />

        <InputDatefilterBody
          {...this.propsWithoutCSS()}
          id={this.props.originalId}
          name={this.props.originalName}
          onSelectDate={this.handleSelectDate}
          ref="body"
        />
      </div>
    );
  },

  /* Form reset event handlers */

  componentDidMount: function() {
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    var $form = $($containerNode.find('input')[0].form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function() {
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    var $form = $($containerNode.find('input')[0].form);
    $form.off('reset', this.clearSelection);
  },

  clearSelection: function() {
    this.setState({
      selectedDates: []
    });
  },

  /* Input focus handlers */

  showFilterBody: function(event) {
    if(this.props.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    var firstFilterInput = $bodyNode.find('input[type=text]')[0];

    $bodyNode.show();
    firstFilterInput.focus();
  },

  hideFilterBody: function() {
    $(document).off('click', this.handleDocumentClick);
    var $bodyNode = $(ReactDOM.findDOMNode(this.refs.body));
    $bodyNode.hide();
  },

  handleDocumentClick: function(event) {
    var $containerNode = $(ReactDOM.findDOMNode(this.refs.container));
    if($containerNode.find(event.target).length === 0) {
      this.hideFilterBody();
    }
  },

  /* Date selection handlers */

  handleSelectDate: function(selectedDates) {
    this.setState({
      selectedDates: selectedDates
    });

    this.hideFilterBody();
  }

});


