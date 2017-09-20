window.HeaderMenu = React.createClass({

  propTypes: {
    items: PropTypes.array,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string,
    ref_id:PropTypes.string
  },

  getDefaultProps: function() {
    return {
      items: [],
      leftIcon: '',
      rightIcon: '',
      ref_id: 'headerMenu'
    };
  },

  render: function () {
    var leftIcon =  (this.props.leftIcon !== '')? <i className={'material-icons left'}>{this.props.leftIcon}</i> : '';
    var rightIcon =  (this.props.rightIcon !== '')? <i className={'material-icons right'}>{this.props.rightIcon}</i> : '';

    return (
        <div>
          <a href={this.props.href} ref="readerMenu" onClick={this.props.onClick} target={this.props.target} data-activates={this.props.ref_id}>
            {leftIcon}
            {this.props.text}
            {rightIcon}
          </a>
          {this.renderMenu()}
        </div>
    );
  },

  renderMenu: function(){
    return (
        <Menu ref_id={this.props.ref_id} className="dropdown-content" items={this.props.items}>
          {this.props.children}
        </Menu>
    );
  },

  componentDidMount: function(){
    $(ReactDOM.findDOMNode(this.refs.readerMenu)).dropdown();
  }

});
