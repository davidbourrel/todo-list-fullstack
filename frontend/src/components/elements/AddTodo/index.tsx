import { ChangeEvent, MouseEvent, useState } from 'react';
import useAddTodo from '@/contexts/todoContext/useAddTodo';
import { isEmptyString } from '@/utils/isEmptyString';
import Button from '../Button';

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');

  const { addTodo } = useAddTodo();

  const handleAddTodo = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const isButtonDisabled =
    newTodo?.length > 0 && !isEmptyString(newTodo) ? false : true;

  return (
    <div className='flex mb-5'>
      <input
        type='text'
        className='bg-neutral-200 text-primary-700 border-2 border-primary-700 flex-1 w-full rounded-l-full pl-4  mr-4'
        value={newTodo}
        onChange={handleInputChange}
        required
      />

      <Button
        className='rounded-r-full flex-shrink-0'
        onClick={handleAddTodo}
        disabled={isButtonDisabled}
      >
        ADD TODO
      </Button>
    </div>
  );
};

export default AddTodo;
