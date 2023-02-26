import { ChangeEvent } from 'react';
import useCompleteTodo from '@/contexts/todoContext/useCompleteTodo';
import { CompleteTodoProps } from './types';

function CompleteTodo({ todoItem }: CompleteTodoProps) {
  const { completed } = todoItem;

  const { completeTodo } = useCompleteTodo();

  const handleComplete = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    completeTodo(todoItem);
  };

  return (
    <div className='flex'>
      <input
        className='w-6 h-6 text-green-600 border-2 rounded-md focus:ring-0'
        type='checkbox'
        checked={completed}
        onChange={handleComplete}
        title={`Change todo to ${!completed ? 'completed' : 'in progress'}`}
      />
    </div>
  );
}

export default CompleteTodo;
