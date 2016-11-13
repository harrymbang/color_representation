'use strict';
function render(){
ReactDOM.render(React.createElement(App),document.getElementById('main'));
}
render();
store.subscribe(render);
