import Spinner from '@/components/images/icons/Spinner';
import useListTodo from '@/contexts/todoContext/useListTodo';
import { TodoType } from '@/_types/todo';
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
      {nonCompletedTodoFirst.map((todoItem: TodoType, i) => (
        <Todo key={i + Date.now()} todoItem={todoItem} />
      ))}
    </ul>
  );
};
export default ListTodo;
