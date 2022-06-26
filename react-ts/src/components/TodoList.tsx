import React from "react";

interface TodoProps {
  //프롭스의 타입도 하나 하나 정해줘야 하는 것 같다.
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
