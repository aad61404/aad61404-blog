import React from "react";
import ReactDOM from "react-dom";

class Myform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null
    };
  }

  myChangeHandler = event => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({ [nam]: val });
  };
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p> Enter your age: </p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<Myform />, document.getElementById("root"));
