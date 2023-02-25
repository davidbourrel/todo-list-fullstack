import { useContext, useMemo } from 'react';
import todoContext from '.';
import { TodoContext } from './todo.types';

type UseHandleSetTodoResult = Pick<TodoContext, 'addTodo'>;

const useAddTodo = (): UseHandleSetTodoResult => {
  const { addTodo } = useContext(todoContext);
  return useMemo(() => ({ addTodo }), [addTodo]);
};

export default useAddTodo;
