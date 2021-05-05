https://www.freecodecamp.org/learn/front-end-libraries/react-and-redux/extract-state-logic-to-redux

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = message => {
    return {
        type : ADD,
        message
    }
}

const messageReducer = (state=[], action) => {
    switch(action.type) {
        case ADD :
        return  [...state , action.message]
        default :
        return state
    }
}

const store = Redux.createStore(messageReducer);

console.log(store.getState())
store.dispatch(addMessage('123'))
store.dispatch(addMessage('456'))
console.log(store.getState())