var InputAutocomplete = React.createClass({
  mixins: [
    CssClassMixin,
    InputComponentMixin,
    SelectComponentMixin
  ],

  propTypes: {
    maxOptions: React.PropTypes.number,
    maxOptionsParam: React.PropTypes.string,
    searchParam: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      maxOptions: 99,
      maxOptionsParam: 'limit',
      searchParam: 'query',
      themeClassKey: 'input.autocomplete'
    };
  },

  getInitialState: function() {
    return {
      active: 0,
      searchValue: ''
    };
  },

  componentWillMount: function() {
    this.state.loadParams[this.props.maxOptionsParam] = this.props.maxOptions;
  },

  componentDidMount: function() {
    var valuesSelect = React.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.on('reset', this.clearSelection);
  },

  componentWillUnmount: function() {
    var valuesSelect = React.findDOMNode(this.refs.select);
    var $form = $(valuesSelect.form);
    $form.off('reset', this.clearSelection);
  },

  render: function() {
    return (
      <div className={this.className()} ref="container">
        <InputAutocompleteSelect
          {...this.propsWithoutCSS()}
          disabled={this.state.disabled}
          selectedOptions={this.selectedOptions()}
          onFocus={this.showResult}
        />

        <InputAutocompleteResult
          id={this.props.id}
          selectedOptions={this.selectedOptions()}
          options={this.state.options}
          active={this.state.active}
          searchValue={this.state.searchValue}
          onKeyDown={this.handleSearchNavigation}
          onChange={this.searchOptions}
          onSelect={this.handleSelect}
          onClear={this.clearSelection}
          onOptionMouseEnter={this.handleOptionMouseEnter}
          ref="result"
        />

        <InputAutocompleteValues
          id={this.props.id}
          name={this.props.name}
          multiple={this.props.multiple}
          selectedOptions={this.selectedOptions()}
          ref="select"
        />
      </div>
    );
  },

  handleDocumentClick: function(event) {
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $containerNode = $(React.findDOMNode(this.refs.container));
    var searchInput = $resultNode.find('input[type=text]')[0];

    if($containerNode.find(event.target).length === 0) {
      this.hideResult();
    } else {
      searchInput.focus();
    }
  },

  hideResult: function() {
    $(document).off('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var $searchInput = $resultNode.find('input[type=text]');
    $resultNode.hide();
    $searchInput.val('');

    this.state.loadParams[this.props.searchParam] = '';
    this.setState({
      active: 0
    });
  },

  showResult: function(event) {
    if(this.state.disabled) {
      return;
    }

    $(document).on('click', this.handleDocumentClick);
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var searchInput = $resultNode.find('input[type=text]')[0];

    $resultNode.show();
    searchInput.focus();
  },

  searchOptions: function(event) {
    var $searchInput = $(event.currentTarget);

    this.state.searchValue = $searchInput.val();
    this.state.loadParams[this.props.searchParam] = this.state.searchValue;
    this.loadOptions();
  },

  handleSearchNavigation: function(event) {
    var keyCode = event.keyCode;

    if(keyCode == 38) {
      this.moveActiveUp();
    } else if(keyCode == 40) {
      this.moveActiveDown();
    } else if(keyCode == 13) {
      event.preventDefault();
      this.selectOption();
    } else if(keyCode == 27 || keyCode == 9) {
      this.hideResult();
    }
  },

  moveActiveUp: function() {
    this.setState({
      active: Math.max(0, this.state.active - 1)
    });
  },

  moveActiveDown: function() {
    var $resultNode = $(React.findDOMNode(this.refs.result));
    var resultListCount = $resultNode.find('li').length;

    this.setState({
      active: Math.min(resultListCount - 1, this.state.active + 1)
    });
  },

  selectOption: function() {
    var resultRef = this.refs.result;
    var resultListRef = resultRef.refs.list;
    var activeOptionRef = resultListRef.refs["option_" + this.state.active];

    this.handleSelect({
      name: activeOptionRef.props.name,
      value: activeOptionRef.props.value,
      showOnTop: false
    });
  },

  clearSelection: function() {
    this.setState({
      value: []
    });
  },

  handleOptionMouseEnter: function(position) {
    this.setState({
      active: position
    });
  },

  handleSelect: function(option) {
    var optionIndex = this.state.value.indexOf(option.value);

    if(optionIndex < 0) {
      if(!this.props.multiple) {
        this.state.value = [];
      }

      this.state.value.push(option.value);
    } else {
      this.state.value.splice(optionIndex, 1);
    }

    this.forceUpdate();
    this.triggerDependableChanged();
  }

});
