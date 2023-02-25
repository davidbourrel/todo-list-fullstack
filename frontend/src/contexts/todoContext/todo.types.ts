import {
  addTodoType,
  completeTodoType,
  deleteTodoType,
  TodoProps,
} from '@/_types/todo';

export interface TodoContext {
  todos: TodoProps[];
  isLoading: boolean;
  error: string;
  addTodo: addTodoType;
  completeTodo: completeTodoType;
  deleteTodo: deleteTodoType;
}
