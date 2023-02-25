import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { TodoProps } from '@/_types/todo';
import Spinner from '@/components/images/icons/Spinner';
import TextTodo from '@/components/elements/TextTodo';
import Button from '@/components/elements/Button';
import Link from '@/components/elements/Link';

const TodoId = () => {
  const [todo, setTodo] = useState<TodoProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getTodo = async () => {
      setIsLoading(true);
      setError('');

      try {
        const res = await fetch(`${process.env.TODO_BASE_URL}/${id}`);

        if (!res.ok) {
          throw `Error ${res.status} ${res.statusText}`;
        }

        const todo = await res.json();
        setTodo(todo);
      } catch (err) {
        console.error(err);
        setError(err as string);
      } finally {
        setIsLoading(false);
      }
    };

    // Fetch todo if id exist
    if (id) {
      getTodo();
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>{`Todo N°${id}`}</title>
      </Head>
      <h1 className='main-title'>TODO DETAILS</h1>
      <div className='mb-10'>
        {isLoading && <Spinner />}
        {!isLoading && !!error && !todo?.id && <p>{error}</p>}
        {!!todo?.todo && (
          <div className='flex flex-col gap-2'>
            <p className='mb-2'>TODO #{todo?.id}</p>
            <TextTodo todo={todo?.todo} completed={todo?.completed} />
            {todo?.completed ? (
              <p className='text-green-700 dark:text-green-400'>Completed</p>
            ) : (
              <p className='text-red-700 dark:text-red-400'>
                Not completed yet
              </p>
            )}
            <p>User ID: {todo?.userId}</p>
          </div>
        )}
      </div>
      <Link href='/' tabIndex={-1}>
        <Button>Back to the home page</Button>
      </Link>
    </>
  );
};
export default TodoId;
