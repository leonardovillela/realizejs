var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');
var PropTypes = require('prop-types');
var ContainerMixin = require('realize/mixins/container_mixin.jsx');
var FormContainerMixin = require('realize/mixins/form/form_container_mixin.jsx');

window.TabButton = React.createClass({
  mixins: [
    CssClassMixin,
    ContainerMixin,
    FormContainerMixin
  ],

  propTypes: {
    id: PropTypes.string,
    title: PropTypes.string,
    active: PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      themeClassKey: 'tabs.tabButton',
      errorThemeClassKey: 'tabs.tabButton.error',
      className: 's1',
      active: false
    };
  },

  render: function () {
    return (
      <li className={this.formContainerClassName()}>
        <a href={'#' + this.props.id} className={this.props.active ? "active" : ""}>
          {this.props.title}
        </a>
      </li>
    );
  }

});