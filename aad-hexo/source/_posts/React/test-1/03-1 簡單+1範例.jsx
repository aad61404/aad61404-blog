
import React from 'react';
import ReactDOM  from 'react-dom';

let number = 0
 
let add = () => {
    number += 1
    render()
}
 
function App(){
  return (
    <div>
      <Box name="huxc" age="21"/>
    </div>
  )
}

function Box(props){
   return (
    <div>
      <span>{props.name}</span><br />
      <span>{props.age}</span><br />
      <span>{number}</span><br />
      <button onClick={add}>+</button>
    </div>
  )
}

render()

function render(){
  ReactDOM.render(
    <App/>,  // React.createElement(App)
    document.querySelector('#root')
  )
}




/*
import React from 'react';
import ReactDOM  from 'react-dom';

var number =0;

function add() {
  number ++;
  render();
}

function App() {
  return (
    <div>
      <p>{number}</p>
      <button onClick={add}>Add</button>
    </div>
  )
}

render()

function render(){
  ReactDOM.render(
    <App/>,  // React.createElement(App)
    document.querySelector('#root')
  )
}

*/