https://www.freecodecamp.org/learn/front-end-libraries/redux/never-mutate-state

const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail
            // return todos.concat(action.todo);
     return [...todos, action.todo];
     //   action == { type: 'ADD_TO_DO', todo: 'AAABBBCCC' } 
    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
store.dispatch(addToDo('AAABBBCCC'))
console.log(store.getState())
console.log(todos);