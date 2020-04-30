import React from 'react';
import ReactDOM  from 'react-dom';

function App() {
  return (
    <div>
      <Count />
      <Count />
      <Count />
    </div>
  )
}

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: 0};
    this.stateAdd = this.stateAdd.bind(this);
  }
  stateAdd = () => {
    this.setState(function(state, props) {
      return {
        number: state.number + 1
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.number}</h2>
        <button onClick={this.stateAdd}>stateAdd</button>
      </div>
    );
  }
}

render()

function render(){
  ReactDOM.render(
    <App />,  // React.createElement(App)
    document.querySelector('#root')
  )
}