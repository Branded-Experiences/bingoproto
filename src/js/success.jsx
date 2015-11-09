var React = require('react');

module.exports = React.createClass({
  handleClick: function(){
    this.props.whenButtonClicked();
  },
  render: function() {
    return <div className="success animated bounceIn">
    	<button className="close" onClick={this.handleClick} >&times;</button>
	    <h3>BINGO!</h3>
	    <p>You are most definitely the parent of a threenager.</p>
	    <p>Congratulations?</p>
    </div>
  }
});
