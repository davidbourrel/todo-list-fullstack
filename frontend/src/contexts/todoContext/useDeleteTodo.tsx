import { useContext, useMemo } from 'react';
import todoContext from '.';
import { TodoContext } from './todo.types';

type UseHandleSetTodoResult = Pick<TodoContext, 'deleteTodo'>;

const useDeleteTodo = (): UseHandleSetTodoResult => {
  const { deleteTodo } = useContext(todoContext);
  return useMemo(() => ({ deleteTodo }), [deleteTodo]);
};

export default useDeleteTodo;
