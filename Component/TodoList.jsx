import React, { useState } from "react";
import Todo from "./Todo";
import "./todolist.css";

const TodoList = ({ todos, setTodos, status, setStatus, filterTodo }) => {


 

  return (
    <div>
      <p className="center">Todo List</p>
      <div>
        {filterTodo.map((todo) => (
          <Todo  status ={status} setStatus = {setStatus} todo={todo} setTodos ={setTodos} todos={todos}/>
        ))}
      </div>
     
    </div>
  );
};

export default TodoList;
