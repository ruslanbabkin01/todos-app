import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { IItem } from './types/todo';


const App: React.FC = () => {
  // const todos = [{ id: '1', title: 'text' }];
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



  return (
    <>
      <TodoList todos={todos}  />
      <AddTodo onAddTodo={todoAddHandler }/>
    </>
  );
}

export default App;
