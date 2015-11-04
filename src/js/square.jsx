var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return { clicked: false }
  },
  handleItemClick: function(item) {
    this.setState({
      clicked: !this.state.clicked
    });
  },
  render: function() {
    return <div onClick={this.handleItemClick} className={"square " + (this.state.clicked === true ? "clicked" : "notclicked") }>{this.props.item}</div>
  }
});