console.log('hi hello');

var React = require('react');
var ReactDOM = require('react-dom');
var Gamecard = require('./gamecard');

var data = {
	title : 'Bingo Card',
	combos : [
		// rows
		[1,2,3,4,5],
		[6,7,8,9,10],
		[11,12,13,14,15],
		[16,17,18,19,20],
		[21,22,24,24,25],
		// columns
		[1,6,11,15,20],
		[2,7,12,17,22],
		[3,8,13,18,23],
		[4,9,14,19,24],
		[5,10,15,20,25],
		// diagonals
		[1,7,13,19,25],
		[5,9,13,17,21]
	],
	cards : [
		{
			position: 1,
			copy: 'Card 1'
		},
		{
			position: 2,
			copy: 'Card 2'
		},
		{
			position: 3,
			copy: 'Card 3'
		},
		{
			position: 4,
			copy: 'Card 4'
		},
		{
			position: 5,
			copy: 'Card 5'
		},
		{
			position: 6,
			copy: 'Card 6'
		},
		{
			position: 7,
			copy: 'Card 7'
		},
		{
			position: 8,
			copy: 'Card 8'
		},
		{
			position: 9,
			copy: 'Card 9'
		},
		{
			position: 10,
			copy: 'Card 10'
		},
		{
			position: 11,
			copy: 'Card 11'
		},
		{
			position: 12,
			copy: 'Card 12'
		},
		{
			position: 13,
			copy: 'Free Space (13)'
		},
		{
			position: 14,
			copy: 'Card 14'
		},
		{
			position: 15,
			copy: 'Card 15'
		},
		{
			position: 16,
			copy: 'Card 16'
		},
		{
			position: 17,
			copy: 'Card 17'
		},
		{
			position: 18,
			copy: 'Card 18'
		},
		{
			position: 19,
			copy: 'Card 19'
		},
		{
			position: 20,
			copy: 'Card 20'
		},
		{
			position: 21,
			copy: 'Card 21'
		},
		{
			position: 22,
			copy: 'Card 22'
		},
		{
			position: 23,
			copy: 'Card 23'
		},
		{
			position: 24,
			copy: 'Card 24'
		},
		{
			position: 25,
			copy: 'Card 25'
		}
	],
	success : {
		title: 'BINGO!',
		msg: 'You are most definitely the parent of a threenager. <br/> Congratulations?'
	}	
}

var element = React.createElement(Gamecard, data);
ReactDOM.render(element, document.querySelector('.game'));