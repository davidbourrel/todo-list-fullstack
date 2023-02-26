import {
  addTodoType,
  completeTodoType,
  deleteTodoType,
  TodoType,
} from '@/_types/todo';

export interface TodoContext {
  todos: TodoType[];
  isLoading: boolean;
  error: string;
  addTodo: addTodoType;
  completeTodo: completeTodoType;
  deleteTodo: deleteTodoType;
}
