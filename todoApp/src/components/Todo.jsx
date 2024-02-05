import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodods = todos.filter((todo)=>todo.done).length
  const totalTodos=todos.length
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedTodods={completedTodods}  totalTodos={totalTodos}/>
    </div>
  );
}
