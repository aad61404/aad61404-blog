https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-stateful-component

 class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // initialize state here
    this.state = {
      name : 'hey'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <You />
      </div>
    );
  }
};
// must 大寫
const You = (props) => {
  return <p>{props.cool}</p>
}
You.defaultProps = {
  cool : 'cool'
}

ReactDOM.render(<StatefulComponent /> , document.getElementById('challenge-node'));