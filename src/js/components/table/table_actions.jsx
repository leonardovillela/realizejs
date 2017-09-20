var PropTypes = require('prop-types');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.TableActions = React.createClass({
  mixins: [CssClassMixin],

  propTypes: {
    dataRows: PropTypes.array,
    selectable: PropTypes.oneOf(['multiple', 'none', 'one']),
    selectedRowIds: PropTypes.array,
    selectedRowIdsParam: PropTypes.string,
    actionButtons: PropTypes.array,
    allSelected: PropTypes.bool,
    count: PropTypes.number,
    onRemoveSelection: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowSelectableFilter: PropTypes.func,
    forceShowSelectAllButton: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'table.actions',
      actionButtons: [],
      selectable: 'multiple',
      selectedRowIds: [],
      allSelected: false,
      rowSelectableFilter: null,
      forceShowSelectAllButton: false,
      onRemoveSelection: function(event) {},
      onSelectAll: function(event) {}
    };
  },

  render: function() {
    return (
      <div className={this.className()}>
        <div>
          <TableSelectionIndicator {...this.propsWithoutCSS()} />
          {this.renderButtons()}
        </div>
      </div>
    );
  },

  renderButtons: function() {
    var actionButtons = [];
    var actionButtonsProps = this.props.actionButtons;

    for(var i = 0; i < actionButtonsProps.length; i++) {
      var actionButtonProps = actionButtonsProps[i];
      actionButtons.push(
        <TableActionButton
          {...actionButtonProps}
          {...this.propsWithoutCSS()}
          element={"a"}
          themeClassKey={"button.flat"}
          key={"action_" + i}
        />
      );
    }

    return actionButtons;
  }
});
