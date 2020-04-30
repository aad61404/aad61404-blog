import React from 'react';
import ReactDOM  from 'react-dom';

function Box(props) {
  return (
    <div>
      <p>{number}</p>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <button onClick={add}>Add</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Box name="huxc" age="21"/>
      <Box name="Sara" age="21"/>
      <Box name="wu" age="21"/>
      <Box name="Cytus" age="21"/>
    </div>
  )
}

render()

function render(){
  ReactDOM.render(
    <App />,  // React.createElement(App)
    document.querySelector('#root')
  )
}