import React from "react";
import "./TodoInput.scss";

const TodoInput = ({ onChange, todoInput, insertTodo }) => {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      insertTodo();
    }
  };

  return (
    <div className="TodoInputWrapper">
      <input
        type="text"
        name="todo"
        placeholder="입력하세요"
        onChange={onChange}
        value={todoInput}
        onKeyPress={handleKeyPress}
      />
      <div className="AddButton" onClick={insertTodo}>
        입력
      </div>
    </div>
  );
};

export default TodoInput;
