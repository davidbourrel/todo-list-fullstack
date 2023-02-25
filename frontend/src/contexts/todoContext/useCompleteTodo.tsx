import { useContext, useMemo } from 'react';
import todoContext from '.';
import { TodoContext } from './todo.types';

type UseHandleSetTodoResult = Pick<TodoContext, 'completeTodo'>;

const useCompleteTodo = (): UseHandleSetTodoResult => {
  const { completeTodo } = useContext(todoContext);
  return useMemo(() => ({ completeTodo }), [completeTodo]);
};

export default useCompleteTodo;
