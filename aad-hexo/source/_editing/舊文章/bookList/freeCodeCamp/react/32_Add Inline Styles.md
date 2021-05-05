https://www.freecodecamp.org/learn/front-end-libraries/react/add-inline-styles-in-react

const styles = {
  color : 'purple',
  fontSize :　40,
  border: "2px solid purple"
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};

ReactDOM.render(<Colorful /> , document.getElementById('challenge-node'));
