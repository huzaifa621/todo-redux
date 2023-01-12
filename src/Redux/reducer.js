import { ADD_TODOS } from "./action";

const intitState = {
  todos: [],
};

export const reducer = (state = intitState, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: [action.payload, ...state.todos] };
    default:
      return state;
  }
};
