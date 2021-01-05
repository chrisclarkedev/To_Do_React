import React, { useState } from "react";
import uuid from "uuid";

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
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid, v4() });
      // reset task inputted
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="task" value={todo.task} onChange={handleTaskInputChange} />
      <button />
    </form>
  );
}

export default TodoFo  rm;
