import React, { useState } from 'react';
import {TodoList} from './TodoList';
import {AddTodo} from './AddTodo';
import { IItem } from '../types/todo';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  function todoAddHandler(todo: IItem) {
    setTodos((prevState) => {
      return [
      ...prevState,
      {
        id: Math.random().toString(),
        title: todo.title
      }]
  })
  }

  function todoRemoveHandler(id: string) {
    setTodos((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id;
      })
  })
  }
  
  return (
    <>
      <AddTodo onAddTodo={todoAddHandler }/>
      <TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
    </>
  );
}
