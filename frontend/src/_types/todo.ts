export interface TodoListData {
  limit: number;
  skip: number;
  todos: TodoProps[];
  total: number;
}

export interface TodoProps {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

export type addTodoType = (todoText: string, userId?: number) => Promise<void>;
export type deleteTodoType = (id: number) => Promise<void>;
export type completeTodoType = (
  id: number,
  completed: boolean
) => Promise<void>;
