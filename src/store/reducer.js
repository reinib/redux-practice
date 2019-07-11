const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // One option for immutably updating state
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case "DECREMENT":
      return {
        // ES6 way for immutably updating state, USE THIS WAY
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.value
      };
    case "SUBTRACT":
      return {
        ...state,
        counter: state.counter - action.value
      };
    case "STORE_RESULT":
      return {
        ...state,
        // Concat returns new array thus is an immutable way to push items to an array
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
  }
  return state;
};

export default reducer;
