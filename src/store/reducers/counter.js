import * as actionTypes from "../actions";

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // One option for immutably updating state
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      return {
        // ES6 way for immutably updating state, USE THIS WAY
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.value
      };
  }
  return state;
};

export default reducer;
