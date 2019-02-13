import React from "react";
import "./TodoList.scss";
import TodoTitle from "./TodoTitle";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  onChangeInput,
  todoInput,
  insertTodo,
  removeTodo,
  onToggleEdit
}) => {
  const todoItemsList = todos.map(todo => (
    <TodoItem
      key={todo.id}
      todo={todo}
      removeTodo={removeTodo}
      onToggleEdit={onToggleEdit}
    />
  ));

  return (
    <div className="TodoListWrapper">
      <TodoTitle />
      <TodoInput
        onChange={onChangeInput}
        todoInput={todoInput}
        insertTodo={insertTodo}
      />
      <div className="TodoItemListWrapper">{todoItemsList}</div>
    </div>
  );
};

export default TodoList;
