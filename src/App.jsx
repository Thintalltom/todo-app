import { useState, useEffect } from "react";
import Form from "../Component/Form";
import "./App.css";
import TodoList from "../Component/TodoList";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function App() {
  const [Info, setInfo] = useState("");
  const [Date, setDate] = useState("");
  const [todos, setTodos] = useState([]); // make the fetch todos as the main thing in it
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  const [background, setBackground] = useState(false);
  const handleClick = () => setBackground(!background);

  //to filter the states from completed to others

  const filteredHandler = () => {
    if (status === "Completed") {
      setFilterTodo(todos.filter((todo) => todo.completed === true));
    } else if (status === "Incomplete") {
      setFilterTodo(todos.filter((todo) => todo.completed === false));
    } else {
      setFilterTodo(todos);
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  useEffect(() => {
    filteredHandler();
   
  }, [todos, status]);



  return (
    <div className={background ? "app" : ""}>
      <div className="bg">
        {background ? (
          <button onClick={handleClick} className="bg-button">
            <MdOutlineDarkMode />
          </button>
        ) : (
          <button onClick={handleClick} className="bg-button">
            <MdDarkMode />
          </button>
        )}
      </div>

      <Form
        status={status}
        setStatus={setStatus}
        todos={todos}
        Info={Info}
        setTodos={setTodos}
        setInfo={setInfo}
        Date={Date}
        setDate={setDate}
      />
      <TodoList
        status={status}
        setStatus={setStatus}
        filterTodo={filterTodo}
        Info={Info}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
