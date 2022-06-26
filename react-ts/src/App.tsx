import React, { useState } from "react";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
//  Todo 인터페이스를 사용

function App() {
  // useState 쓸때도 타입을 정해줘야한다.
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      // 항상 todos 최신값을 사용하기 위해
      { id: Math.random().toString(), text: text },
    ]);
  };

  const todoDelHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div className="App">
      {/* 인풋값을 핸들링 하기위해 함수를 프롭스로 내려준다 */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDelTodo={todoDelHandler} />
    </div>
  );
}

export default App;
