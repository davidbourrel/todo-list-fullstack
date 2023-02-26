import { TodoComponentProps } from './types';
import CompleteTodo from '../CompleteTodo';
import DeleteTodo from '../DeleteTodo';
import Link from '../Link';
import TextTodo from '../TextTodo';

const Todo = ({ todoItem }: TodoComponentProps) => {
  const { id } = todoItem;
  return (
    <li className='flex justify-between items-center  bg-neutral-200 dark:bg-neutral-700 shadow-md'>
      <>
        <Link
          href={`todo/${id}`}
          className='mr-4 flex-1 p-4 transition hover:bg-neutral-300 hover:dark:bg-neutral-500'
          title='Get more details'
        >
          <TextTodo todoItem={todoItem} isTitle={true} />
        </Link>
        <div className='flex items-center gap-4 pr-4'>
          <CompleteTodo todoItem={todoItem} />
          <DeleteTodo id={id} />
        </div>
      </>
    </li>
  );
};
export default Todo;
