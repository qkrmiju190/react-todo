import React from "react";
import { FaEdit, FaEraser } from "react-icons/fa";
import "./TodoItem.scss";

const TodoItem = ({ todo, removeTodo, onToggleEdit, changeEditTodoInput }) => {
  const onRemove = () => {
    removeTodo(todo.id);
  };

  const onToggle = () => {
    onToggleEdit(todo.id);
  };

  const onChange = e => {
    const { value } = e.target;
    changeEditTodoInput(value, todo.id);
  };

  return (
    <div className="TodoItemWrapper">
      {todo.isEditing ? (
        <input
          type="text"
          name="editTodoInput"
          value={todo.title}
          onChange={onChange}
        />
      ) : (
        todo.title
      )}
      <div className="Icons">
        <div className="Icon" onClick={onToggle}>
          <FaEdit />
        </div>
        <div className="Icon" onClick={onRemove}>
          <FaEraser />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
