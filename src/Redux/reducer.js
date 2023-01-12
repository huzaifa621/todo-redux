import { ADD_TODOS, CHANGE_STATUS } from "./action";

const intitState = {
   todos: [],
};

export const reducer = (state = intitState, action) => {
   console.log(state, action);
   switch (action.type) {
      case ADD_TODOS:
         return { ...state, todos: [action.payload, ...state.todos] };
      case CHANGE_STATUS:
         return {
            ...state,
            todos: [
               ...state.todos.map((el) =>
                  el.id == action.payload ? { ...el, status: !el.status } : el
               ),
            ],
         };
      default:
         return state;
   }
};
