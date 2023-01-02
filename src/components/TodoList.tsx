import React from 'react';
import { ITodo } from '../types/todos';

interface ITodoListProps {
  todos: ITodo[];
  onRemoveTodo: (id: number) => void;
  onToggleTodo: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  onToggleTodo,
  onRemoveTodo,
  todos,
}) => {
  if (todos.length === 0) {
    return <p className="center">No todos</p>;
  }

  function onRemoveHandler(event: React.MouseEvent, id: number) {
    event.preventDefault();
    onRemoveTodo(id);
  }

  return (
    <ul>
      {todos.map(todo => {
        const classes = ['todo'];
        if (todo.completed) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleTodo.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => onRemoveHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
