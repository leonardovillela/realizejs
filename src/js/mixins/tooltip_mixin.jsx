var PropTypes = require('prop-types');

window.TooltipMixin = {
  propTypes: {
    tooltipDelay: PropTypes.number,
    tooltipText: PropTypes.string,
    tooltipPosition: PropTypes.oneOf(['bottom', 'top', 'left', 'right'])
  },

  getDefaultProps: function() {
    return {
      tooltipDelay: 10,
      tooltipPosition: 'top',
      tooltipText: null
    };
  },

  componentDidUpdate: function () {
    this.initializeTooltip();
  },

  componentDidMount: function () {
    this.initializeTooltip();
  },

  initializeTooltip: function () {
    if(!!this.props.tooltipText) {
      $('.tooltipped').tooltip();
    }
  },

  getTooltipClassName: function() {
    var className = this.className();
    if(!!this.props.tooltipText)
      className += ' tooltipped';

    return className;
  },

  tooltipAttributes: function() {
    return {
      'data-position': this.props.tooltipPosition,
      'data-delay': this.props.tooltipDelay,
      'data-tooltip': this.props.tooltipText
    };
  }
};

module.exports = TooltipMixin;
