import React from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../Redux/action";

const SingleTodo = ({ title, id, status }) => {
   const dispatch = useDispatch();
   return (
      <div>
         <h1>{title}</h1>
         <button onClick={() => dispatch(changeStatus(id))}>
            Change status: {status ? "Completed" : "Not completed"}
         </button>
      </div>
   );
};

export default SingleTodo;
