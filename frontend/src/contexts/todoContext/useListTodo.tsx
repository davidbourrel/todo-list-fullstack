import { useContext, useMemo } from 'react';
import todoContext from '.';
import { TodoContext } from './todo.types';

type UseHandleSetTodoResult = Pick<
  TodoContext,
  'todos' | 'isLoading' | 'error'
>;

const useListTodo = (): UseHandleSetTodoResult => {
  const { todos, isLoading, error } = useContext(todoContext);

  return useMemo(
    () => ({ todos, isLoading, error }),
    [todos, isLoading, error]
  );
};

export default useListTodo;
