import React from "react";

const TodoListItem = ({ todo }) => (<div className="todo-item-container">
  <h3>{todo.text}</h3>
  <div className="buttons-container">
    <button className="completed-button">mark as completed</button>
    <button className="remove-button">remove</button>
  </div>
</div>
)

export default TodoListItem;