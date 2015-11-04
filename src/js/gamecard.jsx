var React = require('react');
var Square = require('./square');
var Success = require('./success');

module.exports = React.createClass({
  getInitialState: function(){
    return { 
      showSuccess: false,
      showCard: true,
      // Square states
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false,
      7:false,
      8:false,
      9:false,
      10:false,
      11:false,
      12:false,
      13:true,
      14:false,
      15:false,
      16:false,
      17:false,
      18:false,
      19:false,
      20:false,
      21:false,
      22:false,
      23:false,
      24:false,
      25:false
    }
  },
  handleItemClick: function(item) {
    var toggle = item.position;

    var stateObj = function(num) {
      var returnObj = {};
      returnObj[num] = !this.state[num];
      return returnObj
    }.bind(this)(toggle);
   
    this.setState(
      stateObj
    );
  },
  componentDidUpdate: function () {
    var winCodition = [true, true, true, true, true];

    var self = this;
    var currentBoard = this.state;
    var winner = false;

    // Compare Game Card state to winning combinations
    var bingo = this.props.combos.map(function(combo){
      var result = [];

      combo.map(function(digit) {
        result.push( currentBoard[digit] );
      });

      var identity = result.every(function(element, index) {
        return element === winCodition[index]; 
      });
      return identity;
      
    });
    for (var i = 0; i < bingo.length; i++) {
      bingo[i] ? winner = true : null;
    }
    winner ? this.victory() : null;    
  },
  victory: function() {
    // prevents infinite loops
    this.state.showSuccess ? null : this.setState({showSuccess : true, showCard : false});
  },
  render: function() {
  	var list = this.props.cards.map(function(item){
      return <Square
              item={item}
              copy={item.copy}
              position={item.position}
              whenItemClicked={this.handleItemClick}  
              />
    }.bind(this));

    return <div>
      <figure className="card animated flipInX">      
        {list}
        { this.state.showSuccess ? <Success /> : null }
      </figure>
    </div>

  }
});