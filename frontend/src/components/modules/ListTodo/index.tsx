import Spinner from '@/components/images/icons/Spinner';
import useListTodo from '@/contexts/todoContext/useListTodo';
import { TodoProps } from '@/_types/todo';
import Todo from '../../elements/Todo';

const ListTodo = () => {
  const { todos, isLoading, error } = useListTodo();

  if (isLoading) return <Spinner />;
  if (!isLoading && !!error) return <p>{error}</p>;

  const nonCompletedTodoFirst = [...todos].sort(
    // Convert the 2 boolean values to numbers and subtract the first number from the second
    (a, b) => Number(a.completed) - Number(b.completed)
  );

  return (
    <ul className='flex flex-col gap-4'>
      {nonCompletedTodoFirst.map((todoItem: TodoProps, i) => (
        <Todo key={i + Date.now()} todoItem={todoItem} />
      ))}
    </ul>
  );
};
export default ListTodo;
