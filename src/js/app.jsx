console.log('hi hello');

var React = require('react');
var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');
var Gamecard = require('./gamecard');


var options = {
  title: 'Choose a dessert', // What should show up on the button to open/close the dropdown
  items: [ // List of items to show in the dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
};

var data = {
	title : 'Bingo Card',
	copy : [
		'Card 1',
		'Card 2',
		'Card 3',
		'Card 4',
		'Card 5',
		'Card 6',
		'Card 7',
		'Card 8',
		'Card 9',
		'Card 10',
		'Card 11',
		'Card 12',
		'Free Space',		
		'Card 13',
		'Card 14',
		'Card 15',
		'Card 16',
		'Card 17',
		'Card 18',
		'Card 19',
		'Card 20',
		'Card 21',
		'Card 22',
		'Card 23',
		'Card 24'
	],
	success : {
		title: 'BINGO!',
		msg: 'You are most definitely the parent of a threenager. <br/> Congratulations?'
	}	
}

var element = React.createElement(Dropdown, options);
var element2 = React.createElement(Gamecard, data);
//ReactDOM.render(element, document.querySelector('.header'));
ReactDOM.render(element2, document.querySelector('.game'));