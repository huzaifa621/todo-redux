export const ADD_TODOS = "ADD_TODOS";
export const CHANGE_STATUS = "CHANGE_STATUS";

export const addTodo = (payload) => ({
   type: ADD_TODOS,
   payload,
});

export const changeStatus = (id) => {
   return { type: CHANGE_STATUS, payload: id };
};
