import { TextTodoProps } from './types';

const TextTodo = ({ completed, todo }: TextTodoProps) => {
  const textTodoClassName = completed
    ? 'line-through text-neutral-600 dark:text-neutral-300'
    : '';
  return <p className={textTodoClassName}>{todo}</p>;
};
export default TextTodo;
