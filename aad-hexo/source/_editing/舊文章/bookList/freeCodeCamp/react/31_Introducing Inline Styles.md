https://www.freecodecamp.org/learn/front-end-libraries/react/introducing-inline-styles

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color : "red", fontSize: 72}}>Big Red</div>
    );
  }
};
ReactDOM.render(<Colorful /> , document.getElementById('challenge-node'));
