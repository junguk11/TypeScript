import React, { useRef } from "react";
// 인터페이스를 사용해도 되나 타입사용
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};
// 프롭스 타입을 정해준다
const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const iptText = textInputRef.current!.value;
    props.onAddTodo(iptText);
  };

  return (
    <form onSubmit={todoHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" name="" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
