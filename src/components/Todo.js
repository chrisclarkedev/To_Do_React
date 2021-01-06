import React from "react";

function Todo({ todo }) {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" />
      {/* Once task is completed cross it out in TodoList */}
      <li
        style={{
          color: "white",
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button>X</button>
    </div>
  );
}

export default Todo;
