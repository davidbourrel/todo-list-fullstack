import CompleteTodo from '../CompleteTodo';
import DeleteTodo from '../DeleteTodo';
import Link from '../Link';
import TextTodo from '../TextTodo';
import { TodoComponentProps } from './types';

const Todo = ({ todoItem }: TodoComponentProps) => {
  const { id, completed, todo } = todoItem;

  return (
    <li className='flex justify-between items-center  bg-neutral-200 dark:bg-neutral-700 shadow-md'>
      <>
        <Link
          href={`todo/${id}`}
          className='mr-4 flex-1 p-4 transition hover:bg-neutral-300 hover:dark:bg-neutral-500'
          title='Get more details'
        >
          <TextTodo completed={completed} todo={todo} />
        </Link>
        <div className='flex items-center gap-4 pr-4'>
          <CompleteTodo id={id} completed={completed} />
          <DeleteTodo id={id} />
        </div>
      </>
    </li>
  );
};
export default Todo;
