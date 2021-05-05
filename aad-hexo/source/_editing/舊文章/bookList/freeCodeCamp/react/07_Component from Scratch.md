https://www.freecodecamp.org/learn/front-end-libraries/react/write-a-react-component-from-scratch

// change code below this line

const ChildComponent = () => {
    return (
        <div>
            <h1>My First React Component!</h1>
        </div>
    );
};

class MyComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
             <ChildComponent />
            </div>
        );
    }
}
ReactDOM.render(<MyComponent /> , document.getElementById('challenge-node'));