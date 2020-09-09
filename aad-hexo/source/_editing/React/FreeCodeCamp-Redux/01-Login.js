const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
    if(action.type == 'LOGIN') {
      return  {
        login: true
      };
    } else {
      return {
        login: false
      };
    }
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  console.log(store.getState());
  console.log('--------------------');
  store.dispatch(loginAction());
  console.log('after store.dispatch(loginAction())')
  console.log(store.getState());
  