https://www.freecodecamp.org/learn/front-end-libraries/redux/copy-an-object-with-object.assign

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // don't mutate state here or the tests will fail
      const newObject = Object.assign({}, state)
      newObject.status = 'online';
      console.log(newObject);
      // console.log(action.type.toLowerCase())
      return newObject
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);

store.dispatch(wakeUp())
// console.log(store.getState())
