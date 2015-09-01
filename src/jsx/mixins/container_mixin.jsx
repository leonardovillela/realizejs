var ContainerMixin = {
  propTypes: {
    forwardedProps: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      forwardedProps: {}
    };
  },

  getChildren: function() {
    return this.cloneChildrenWithProps();
  },

  renderChildren: function() {
    return this.cloneChildrenWithProps();
  },

  getAllDescendants: function() {

  },

  cloneChildrenWithProps: function() {
    var props = this.buildPropsToForward();

    return React.Children.map(this.props.children, function(child) {
      var forwardedProps = $.extend({}, this.props.forwardedProps, props);
      return React.addons.cloneWithProps(child, $.extend({}, forwardedProps, this.buildChildPropsToKeep(child), { forwardedProps: forwardedProps }));
    }.bind(this));
  },

  buildChildPropsToKeep: function(child) {

    var defaultChildProps = {};
    var keepProps = [];

    if(!!child.type.getDefaultProps)
      defaultChildProps = child.type.getDefaultProps();

    if($.isArray(child.props['ignoreForwarded']))
      keepProps = child.props['ignoreForwarded'];

    var newProps = {};

    for(var k in child.props) {
      if( this.childPropValueIsNotDefault(child.props[k], defaultChildProps[k]) ||
          this.shouldKeepChildPropValueAnyway(k, keepProps))
        newProps[k] = child.props[k];
    }
    return newProps;
  },

  childPropValueIsNotDefault: function (propValue, defaultPropValue) {
    return !_.isEqual(propValue, defaultPropValue);
  },


  shouldKeepChildPropValueAnyway: function (propName, keepList) {
    return keepList.indexOf(propName) >= 0;
  },

  buildPropsToForward: function() {
    var propsToForward = !!this.propsToForward ? this.propsToForward() : [];
    var forwardMapping = !!this.propsToForwardMapping ? this.propsToForwardMapping() : {};
    var props = {};

    for(var i = 0; i < propsToForward.length; i++) {
      var propToForward = propsToForward[i];

      props[propToForward] = this.props[propToForward];
    }

    return $.extend(props, forwardMapping);
  }

};