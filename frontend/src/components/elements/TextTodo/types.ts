import { TodoProps } from '@/_types/todo';

export type TextTodoProps = Pick<TodoProps, 'completed' | 'todo'>;
