'use strict';
const Provider = ReactRedux.Provider;
var App =  React.createClass({
	render: function() {
		return(
		React.createElement('div', null, 
		React.createElement(Provider, {store},
			React.createElement(EnterColor)),
		React.createElement(Provider, {store},
			React.createElement(DisplayColor, Object.assign({},store.getState())))
		)
		);
	}
});

			
		
