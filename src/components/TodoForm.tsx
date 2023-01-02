import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState<string>('');

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }

  function onHandleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title) {
      // toast.info('Please entry correct ');
      return;
    }

    onAddTodo(title);
    setTitle('');
  }

  return (
    <form onSubmit={onHandleSubmit} className="input-field mt2">
      <input
        type="text"
        id="title"
        value={title}
        onChange={onChangeHandler}
        placeholder="Please enter todo"
      />
      <label htmlFor="title" className="active">
        Add todo
      </label>
    </form>
  );
};
