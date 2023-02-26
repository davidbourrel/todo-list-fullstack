import { ChangeEvent, MouseEvent, useState } from 'react';
import useAddTodo from '@/contexts/todoContext/useAddTodo';
import { isEmptyString } from '@/utils/isEmptyString';
import Button from '../Button';

const AddTodo = () => {
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoComment, setNewTodoComment] = useState('');

  const { addTodo } = useAddTodo();

  const handleAddTodo = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodoTitle, newTodoComment);
    setNewTodoTitle('');
    setNewTodoComment('');
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoComment(e.target.value);
  };

  const isTitleInputValid =
    newTodoTitle?.length > 0 && !isEmptyString(newTodoTitle);
  const isCommentInputValid =
    newTodoComment?.length > 0 && !isEmptyString(newTodoComment);

  const isButtonDisabled =
    isTitleInputValid && isCommentInputValid ? false : true;

  return (
    <div className='flex flex-col mb-10'>
      <label htmlFor='add-title' className='text-sm'>
        Add title
      </label>
      <input
        id='add-title'
        type='text'
        className='bg-neutral-200 text-primary-700 border-2 border-primary-700 flex-1 w-full px-4 mb-4'
        value={newTodoTitle}
        onChange={handleTitleChange}
        placeholder='Title'
        required
      />

      <label htmlFor='add-comment' className='text-sm'>
        Add comment
      </label>
      <input
        id='add-comment'
        type='text'
        className='bg-neutral-200 text-primary-700 border-2 border-primary-700 flex-1 w-full px-4 mb-4'
        value={newTodoComment}
        onChange={handleCommentChange}
        placeholder='Comment'
        required
      />

      <Button
        className='rounded-full flex-shrink-0'
        onClick={handleAddTodo}
        disabled={isButtonDisabled}
      >
        ADD TODO
      </Button>
    </div>
  );
};

export default AddTodo;
