import React, { Component } from "react";
import TodoList from "components/TodoList";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 0,
        title: "리엑트 공부",
        isEditing: false
      },
      {
        id: 1,
        title: "영어공부",
        isEditing: false
      },
      {
        id: 2,
        title: "javascript",
        isEditing: false
      },
      {
        id: 3,
        title: "하기싫음",
        isEditing: false
      }
    ],
    todoInput: ""
  };

  changeTodoInput = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      todoInput: value
    });
  };

  insertTodo = () => {
    const { todoInput, todos } = this.state;
    this.setState({
      ...this.state,
      todos: todos.concat({
        id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
        title: todoInput
      }),
      todoInput: ""
    });
  };

  removeTodo = id => {
    const { todos } = this.state;
    this.setState({
      ...this.state,
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  onToggleEdit = id => {
    const { todos } = this.state;
    // 토글된 투두만을 골라내어 나머지값들은 유지하고, isEditing 값만 반대로 바꾸어줍니다.
    // 나머지 투두들은 모두 isEditing을 false로 바꾸어줍니다.
    const toggledTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isEditing: !todo.isEditing
        };
      }

      return {
        ...todo,
        isEditing: false
      };
    });

    this.setState({
      ...this.state,
      todos: toggledTodos
    });
  };

  changeEditTodoInput = (value, id) => {
    const { todos } = this.state;
    // parameter로 받아온 id값을 기준으로 index를 찾아냅니다.
    const index = todos.findIndex(todo => id === todo.id);
    // 찾아낸 인덱스값으로 바꿀 투두를 변수로 저장합니다.
    const newTodo = todos[index];
    // 아에 바뀔 state의 todos를 변수로 저장합니다.
    const newTodos = [...todos];
    // 새로운 투두에서 바뀔 투두만 title값만 바꾸어줍니다.
    newTodos[index] = {
      ...newTodo,
      title: value
    };
    this.setState({
      ...this.state,
      todos: newTodos
    });
  };

  render() {
    const { todos, todoInput } = this.state;
    const {
      changeTodoInput,
      insertTodo,
      removeTodo,
      onToggleEdit,
      changeEditTodoInput
    } = this;
    return (
      <TodoList
        todos={todos}
        onChangeInput={changeTodoInput}
        todoInput={todoInput}
        insertTodo={insertTodo}
        removeTodo={removeTodo}
        onToggleEdit={onToggleEdit}
        changeEditTodoInput={changeEditTodoInput}
      />
    );
  }
}

export default TodoContainer;
