import React from 'react';
import { IItem } from '../types/todo';

interface IProps {
  todos: IItem[];
   onRemoveTodo: (id:string) => void;
};

export const TodoList: React.FC<IProps> = ({onRemoveTodo, todos}) => {
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <div>{todo.title}</div>
          <div>{todo.id}</div>
        <button onClick={()=> onRemoveTodo(todo.id)}>Remove</button></li>
      ))}
    </ul>
  );
};
