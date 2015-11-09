var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    if (this.props.item.position === 13) {
      return { clicked: true }
    } else {
      return { clicked: false }
    }
  },
  handleClick: function(){
    if (this.props.item.position != 13) {
      this.setState({
        clicked: !this.state.clicked
      });
      this.props.whenItemClicked(this.props.item);
    }
  },
  render: function() {
    return <div onClick={this.handleClick} className={"square " + (this.state.clicked === true ? "clicked" : "notclicked") } ><div className="square__inner">{this.props.item.copy}</div></div>
  }
});