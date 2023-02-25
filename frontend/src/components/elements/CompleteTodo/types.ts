import { TodoProps } from '@/_types/todo';

export type CompleteTodoProps = Pick<TodoProps, 'completed' | 'id'>;
