import { TodoContext } from './todo.types';

export const INITIAL_TODO_CONTEXT: TodoContext = {
  todos: null as unknown as TodoContext['todos'],
  isLoading: null as unknown as TodoContext['isLoading'],
  error: null as unknown as TodoContext['error'],
  addTodo: null as unknown as TodoContext['addTodo'],
  completeTodo: null as unknown as TodoContext['completeTodo'],
  deleteTodo: null as unknown as TodoContext['deleteTodo'],
};
