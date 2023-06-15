import React, {useState} from "react";
import "./form.css";
import { GrFormAdd } from "react-icons/gr";

const Form = ({
  todos,
  setTodos,
  setInfo,
  Info,
  Date,
  setDate,
  status,
  setStatus,
}) => {
  //function theat update the piece of state
  const inputText = (e) => {
    setInfo(e.target.value);
  };

  const inputDate = (e) => {
    setDate(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault(); //prevents refresh of page
    setTodos([
      ...todos,
      { text: Info, id: Math.random() * 1000, completed: false },
    ]);
   
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  

  return (
    <form className="form">
      <label className="task">Task today</label> <br />
      <input
        onChange={inputText}
        type="text"
        placeholder="input here "
        className="inputHere"
        
      />
      <button  type="submit" disabled={!todos} className="submit" onClick={submitTodo}>
       <p>Add</p>
      </button>
      <select className="input" onChange={statusHandler}>
        <option>All</option>
        <option>Completed</option>
        <option>Incomplete</option>
      </select>{" "}
     
      
  
    </form>
  );
};

export default Form;
