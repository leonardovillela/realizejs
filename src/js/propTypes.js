Realize.PropTypes = {};

Realize.PropTypes.localizedString = function(props, propName, componentName) {
  var value = props[propName];
  if(value === null || value === undefined || (typeof value === "string" && value.length === 0)) {
    return true;
  }

  var translatedValue = Realize.t(value);
  if(typeof value !== "string" || typeof translatedValue !== "string" || translatedValue.length === 0) {
    return new Error('Property ' + propName + ' from ' + componentName + ' is not a localized string.');
  }
};