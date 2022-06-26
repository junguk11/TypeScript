import React from "react";

import TodoList from "./components/TodoList";

function App() {
  const todos = [{ id: "t1", text: "리액트 타입 공부하기" }];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  );
}

export default App;
