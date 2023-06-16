import React, { useState } from "react";
import Todo from "./Todo";
import "./todolist.css";

const TodoList = ({ todos, setTodos, status, setStatus, filterTodo }) => {


 

  return (
    <div>
      <p className="center">Todo List</p>
      <div>
        {filterTodo.map((todo) => (
          <div key={todo.id}>
          <Todo  status ={status} setStatus = {setStatus} todo={todo} setTodos ={setTodos} todos={todos}/>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default TodoList;
