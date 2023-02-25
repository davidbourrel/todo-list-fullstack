import { MouseEvent } from 'react';
import useDeleteTodo from '@/contexts/todoContext/useDeleteTodo';
import { DeleteTodoProps } from './types';
import TrashIcon from '@/components/images/icons/TrashIcon';
import Button from '../Button';

const DeleteTodo = ({ id }: DeleteTodoProps) => {
  const { deleteTodo } = useDeleteTodo();

  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    deleteTodo(id);
  };

  return (
    <Button
      headless
      onClick={handleDelete}
      className='p-2 h-max border-2 border-red-700 rounded transition hover:cursor-pointer hover:bg-red-700'
      title='Delete todo'
    >
      <TrashIcon />
    </Button>
  );
};
export default DeleteTodo;
