import { getRightBooleanFormat } from '@/utils/conversion';
import { TodoType } from '@/_types/todo';
import { useEffect, useState, PropsWithChildren } from 'react';
import todoContext from './todo.context';
import { TodoContext } from './todo.types';

const { Provider } = todoContext;

type TodoProviderProps = PropsWithChildren;

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllTodos = async () => {
      setIsLoading(true);
      setError('');

      try {
        const res = await fetch(`${process.env.TODO_BASE_URL}`);

        if (!res.ok) {
          throw `Error ${res.status} ${res.statusText}`;
        }

        const todos = await res.json();
        setTodos(todos);
      } catch (err) {
        console.error(err);
        setError(err as string);
      } finally {
        setIsLoading(false);
      }
    };

    getAllTodos();
  }, []);

  const addTodo = async (
    todoTitle: string,
    todoComment: string,
    userId = 5
  ) => {
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: todoTitle,
          comment: todoComment,
          completed: false,
          userId,
        }),
      });

      if (!res.ok) {
        throw `Error ${res.status} ${res.statusText}`;
      }

      const newTodo: TodoType = await res.json();

      setTodos((c) => [newTodo, ...c]);
    } catch (err) {
      console.error(err);
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const completeTodo = async (todo: TodoType) => {
    setIsLoading(true);
    setError('');

    // Todo has to be format because SQLITE accept 0 (false) or 1 (true) only
    const newFormattedTodo = {
      ...todo,
      completed: getRightBooleanFormat(!todo.completed),
    };

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}/${todo?.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...newFormattedTodo,
        }),
      });

      if (!res.ok) {
        throw `Error ${res.status} ${res.statusText}`;
      }

      setTodos((c) =>
        c.map((currentTodo) =>
          currentTodo.id === todo?.id ? newFormattedTodo : currentTodo
        )
      );
    } catch (err) {
      console.error(err);
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id: number) => {
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw `Error ${res.status} ${res.statusText}`;
      }

      setTodos((c) => c.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error(err);
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const contextValue: TodoContext = {
    todos,
    isLoading,
    error,
    addTodo,
    completeTodo,
    deleteTodo,
  };

  return <Provider value={contextValue}>{children}</Provider>;
}
