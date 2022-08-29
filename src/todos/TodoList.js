import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

const TodoList = ({ todos = [{ text: "hi there" }] }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) => <TodoListItem key={i} todo={todo} />)}
  </div>
)

export default TodoList;