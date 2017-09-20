var PropTypes = require('prop-types');
var CssClassMixin = require('realize/mixins/css_class_mixin.jsx');

window.FlashContent = React.createClass({
 mixins: [CssClassMixin],
 propTypes: {
   type: PropTypes.string,
   message: PropTypes.oneOfType([
     PropTypes.element,
     PropTypes.string,
     PropTypes.array
   ])
 },

 getInitialState: function () {
   return {
     themeClassKey: 'flash.content flash.' + this.props.type + '.content'
   };
 },

 render: function () {
   return (
     <div className={this.className()}>
       {this.renderMessages()}
     </div>
   );
 },

 renderMessages: function () {
   var isArray = Array.isArray(this.props.message);
   var messages = !isArray ? [this.props.message] : this.props.message;
   return messages.map(function(message, index) {
     return typeof message == "string" ? <p key={"flash_content_" + index}>{message}</p> : message;
   });
 }

});
