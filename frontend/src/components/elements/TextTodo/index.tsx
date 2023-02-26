import { TextTodoProps } from './types';

const TextTodo = ({ todoItem, isTitle = false }: TextTodoProps) => {
  const { completed, todo, comment } = todoItem;

  const textTodoClassName = completed
    ? 'line-through text-neutral-600 dark:text-neutral-300'
    : '';

  const titleComponent = <h2 className={textTodoClassName}>{todo}</h2>;
  const commentComponent = <p className={textTodoClassName}>{comment}</p>;

  return isTitle ? titleComponent : commentComponent;
};
export default TextTodo;
