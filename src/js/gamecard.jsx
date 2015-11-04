var React = require('react');
var Square = require('./square');

module.exports = React.createClass({
 
  render: function() {
  	var list = this.props.copy.map(function(item){
      return <Square
              item={item}   
              />
    }.bind(this));

    return <figure className="card">      
        {list}
    </figure>
  }
});