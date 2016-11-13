'use strict';

const displayColorStyle = {display:'inline', margin:'10px 10px 10px 10px'};
var DisplayColor = React.createClass({
	displayName:'DisplayColor',
	getInitialState: function() {
		return {colors:[]};
	},
	render: function(){
		const createColor = function(color){
			console.log({color});
			return React.createElement(
			'li',
			{key: color.hex, style:{float:'left', clear:'both', listStyleType:'none'}},
			React.createElement(
				'span',
				{style:{display:'inline', margin:'10px 100px 10px 10px', 'backgroundColor':color.hex, width:'75px'}},
				"\u00a0"
			),
			React.createElement(
				'span',
				{style:displayColorStyle},
				color.rgb
			),
			React.createElement(
				'span',
				{style:displayColorStyle},
				color.hex
			)
			);
		};
		return React.createElement(
			'ul',
			null,
			this.props.colors.map(createColor)
		); 
	}
});
