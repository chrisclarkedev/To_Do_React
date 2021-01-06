import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);

  //Use Effect with empty dependency array
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);
  // Use Effect hook for browser storage
  // Everytime the todo array changes, store information in local storage

  useEffect(() => {
    // completed when todos array updates
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds to the todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    // Function that takes in the id of the todo
    setTodos(
      // Passes a new todo array which will get by performing mapping
      // Map over each todo and check if the id matches the one passed in
      // If so return a new object with the completed property negated
      // False becomes true and true becomes false when function is run under certain id
      todos.map((todo) => {
        if (todos.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  // Delete todo function
  function removeTodo(id) {
    // Filter allows the removal of components in an array
    // Todo will be kept if the id is not the one we are looking for
    // If the id is the same remove it
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React To Do
      </Typography>
      <p>Todo</p>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
