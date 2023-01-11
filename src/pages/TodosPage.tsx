import  { useState, useEffect } from 'react';
import { TodoForm } from 'components/TodoForm';
import { TodoList } from 'components/TodoList';
import { ITodo } from '../types/todos';

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function todoAddHandler(title: string) {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos(prevState => [newTodo, ...prevState]);
  }

  function todoRemoveHandler(id: number) {
    const messageRemove = window.confirm('Do you want to delete a todo?');
    if (messageRemove) {
      setTodos(prevState => prevState.filter(todo => todo.id !== id));
    }
  }

  const todoToggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  return (
    <>
      <TodoForm onAddTodo={todoAddHandler} />
      <TodoList
        todos={todos}
        onRemoveTodo={todoRemoveHandler}
        onToggleTodo={todoToggleHandler}
      />
    </>
  );
};
