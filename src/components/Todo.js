import React from "react";

function Todo({ todo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }

  function handleRemoveClick() {
    // Onclick function for the remove todos
    removeTodo(todo.id);
  }
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      {/* Once task is completed cross it out in TodoList */}
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Todo;
