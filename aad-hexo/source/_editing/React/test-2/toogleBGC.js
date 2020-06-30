// https://www.codecademy.com/courses/react-101/lessons/this-state/exercises/call-setstate-another-function

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color : green }
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const change = this.state.color == green ? yellow : green;
    this.setState({color: change })
  }

  render() {
    return (
      <div style={{background: this.state.color}}>
        <button onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <Toggle />, document.getElementById('app')
)