'use strict';

const inputColorFormStyle = {display:'inline-block', margin:'10px 10px 10px 10px'};
const colorEventHandler = function(e){
		e.preventDefault();	
		const enterColorElem = document.getElementById('enteredColor');
		const processedInput = breakdownInput(enterColorElem.value)	
		if(processedInput.length || !enterColorElem.value)
			store.dispatch(ColorAction(processedInput));
};
const EnterColor = React.createClass({
	displayName: 'EnterColor',
	clickHandler:function(e){
		console.log('clickHandler in the house');									
		colorEventHandler(e);	
	},
	changeHandler:function(e){
		console.log('changeHandler in the house');									
		colorEventHandler(e);
	},
	render: function(){
		return React.createElement('div',null,
			"Please separate multiple colors codes with the ';' character",
			React.createElement('br'),				
			"Enter color codes as either Hex in the format '#XXXXXX'",
			React.createElement('br'),
		"	Or as RGB values in the format, 'rgb(x, x, x)'",
			React.createElement('br'),
			React.createElement('label', {for:'enteredColor'}, 'Enter Color Codes: '),		
			React.createElement('input', {type:'text', id:'enteredColor', onChange:this.changeHandler}),
			React.createElement('button', {style:inputColorFormStyle, onClick:this.clickHandler}, 'Translate!')
		);
	},
});
