https://www.freecodecamp.org/learn/front-end-libraries/react/use-default-props

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component{props.items}</h1>
    </div>
  )
};

ShoppingCart.defaultProps = { items : 0}
// change code below this line

ReactDOM.render(<ShoppingCart /> , document.getElementById('challenge-node'));