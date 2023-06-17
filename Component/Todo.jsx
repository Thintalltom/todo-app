import React, { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import "./todolist.css";
const Todo = ({ todo, setTodos, todos, setStatus, status }) => {
  //delet button
  const deleteBtn = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todos);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  

  return (
    <div className="mainContainer">
     
    
            <div key={todo.id } className='container'>
              <div className="words">
              <p className={`${todo.completed ? 'completed' : ''}`}>{todo.text}</p>   
              </div>
              <div className="icons">
              <AiFillDelete onClick={deleteBtn} className='icon1' /> 
              <FaCheck onClick={completeHandler} className='icon2' /> 
              </div>
              
            </div>
        
   
     
    </div>
  );
};

export default Todo;
