import React from 'react';
import { IItem } from '../types/todo';

interface IProps {
  todos: IItem[];
   onRemoveTodo: (id:string) => void;
};

const TodoList: React.FC<IProps> = (props) => {
  
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.id}</div>
        <button onClick={()=> props.onRemoveTodo(todo.id)}>Remove</button></li>
      ))}
    </ul>
  );
};
export default TodoList;
