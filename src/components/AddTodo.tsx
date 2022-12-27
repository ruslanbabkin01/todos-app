import React, { useRef, useState } from 'react';
import { IItem } from '../types/todo';

type OnlyTitle = Pick<IItem, 'title'>;

interface IProps{
   onAddTodo: (todo:IItem) => void;
}

export const AddTodo: React.FC<IProps> = ({onAddTodo}) => {
   const [todo, setTodo] = useState < Partial <OnlyTitle>> ({});
   const titleInputRef = useRef<HTMLInputElement>(null);

    function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
       setTodo({
          title: e.target.value
         })
   }
   
   function handleSubmit(e:React.FormEvent) {
      e.preventDefault();
      if (!todo.title) {
         return
      }

      onAddTodo(todo as IItem);
   }

  return (
     <form onSubmit={handleSubmit}>
        <div>
           <span>
              Add title
           </span>
           <input type="text" id="add-todo" ref={titleInputRef} onChange={titleHandler } />
        </div>
        <button type='submit'>AddTodo</button>
    </form>
  );
};