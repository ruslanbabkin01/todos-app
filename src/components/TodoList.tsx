import React from 'react';
import { IItem } from '../types/todo';

interface IProps {
  todos: IItem[];
};

const TodoList: React.FC<IProps> = (props) => {
  
  return (
    <ul>
      {props.todos.map(todo => (
        <li key={todo.id}>{todo.title}
      {todo.id}</li>
      ))}
    </ul>
  );
};
export default TodoList;
