import { TodoProps } from '@/_types/todo';
import { useEffect, useState, PropsWithChildren } from 'react';
import todoContext from './todo.context';
import { TodoContext } from './todo.types';

const { Provider } = todoContext;

type TodoProviderProps = PropsWithChildren;

export default function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getAllTodos = async () => {
      setIsLoading(true);
      setError('');

      try {
        const res = await fetch(`${process.env.TODO_BASE_URL}?limit=8`);

        if (!res.ok) {
          throw `Error ${res.status} ${res.statusText}`;
        }

        const data = await res.json();
        setTodos(data?.todos);
      } catch (err) {
        console.error(err);
        setError(err as string);
      } finally {
        setIsLoading(false);
      }
    };

    getAllTodos();
  }, []);

  const addTodo = async (todoText: string, userId = 5) => {
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          todo: todoText,
          completed: false,
          userId,
        }),
      });

      if (!res.ok) {
        throw `Error ${res.status} ${res.statusText}`;
      }

      const newTodo: TodoProps = await res.json();

      setTodos((c) => [newTodo, ...c]);
    } catch (err) {
      console.error(err);
      setError(err as string);
    } finally {
      setIsLoading(false);
    }
  };

  const completeTodo = async (id: number, completed: boolean) => {
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${process.env.TODO_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          completed: completed,
        }),
      });

      if (!res.ok) {
        throw `Error ${res.status} ${res.statusText}`;
      }

      const updatedTodo: TodoProps = await res.json();

      setTodos((c) =>
        c.map((todo) =>
          todo.id === id ? { ...todo, completed: updatedTodo.completed } : todo
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
