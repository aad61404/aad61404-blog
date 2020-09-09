const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
        // don't mutate state here or the tests will fail
        return [...state , action.todo]
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);
  console.log(store.getState())
  store.dispatch(addToDo('HELLO'));
  console.log(store.getState())