https://www.freecodecamp.org/learn/front-end-libraries/react/give-sibling-elements-a-unique-key-attribute

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map( (i) =>
    <li key={i+1}>{i}</li>); // change code here
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

ReactDOM.render(<Frameworks /> , document.getElementById('challenge-node'));