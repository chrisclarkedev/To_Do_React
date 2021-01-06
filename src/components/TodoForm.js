import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // prevents browser refresh
    if (todo.task.trim()) {
      // trim() removes the whitespace of the string
      addTodo({ ...todo, id: uuidv4() });
      // reset task inputted
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="task" value={todo.task} onChange={handleTaskInputChange} />
      <button type="submit">submit</button>
    </form>
  );
}

export default TodoForm;
