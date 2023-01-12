import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../Redux/action";

const Todo = () => {
  const [text, setText] = useState("");

  const { todos } = useSelector((state) => state);
  console.log(todos);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newTodo = {
      title: text,
      id: Date.now(),
      status: false,
    };

    dispatch(addTodo(newTodo));
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
};

export default Todo;
