interface Todo {
  id: number;
  todo: string;
  comment: string;
  completed: boolean;
  userId: number;
}

export type TodoType = Todo;
export type addTodoType = (
  todoTitle: string,
  todoComment: string,
  userId?: number
) => Promise<void>;
export type deleteTodoType = (id: number) => Promise<void>;
export type completeTodoType = (todo: TodoType) => Promise<void>;
