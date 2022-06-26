import React from "react";

interface TodoProps {
  //프롭스의 타입도 하나 하나 정해줘야 하는 것 같다.
  items: { id: string; text: string }[];
  onDelTodo: (id: string) => void;
}

const TodoList: React.FC<TodoProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button
            onClick={() => {
              props.onDelTodo.bind(null, todo.id);
            }}
          >
            DELETE
          </button>
          {/* bind 를 써줘도 되고 () => {} 를 써줘도 된다.
            강의가 1년 전 꺼라 화살표 함수를 쓰는게 맞는듯 싶다. */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
