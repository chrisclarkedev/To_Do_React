import { Button, TextField } from "@material-ui/core";
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
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Tasks"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button type="submit">submit</Button>
    </form>
  );
}

export default TodoForm;
