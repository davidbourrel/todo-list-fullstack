import { Request, Response } from 'express';
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from '../models/todos';
import { db } from '../server';

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    await db.all(getAll, [], (err: Error | null, rows: any) => {
      if (err) return console.error(err.message);

      return res.status(200).json(rows);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const getTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.get(getOne, id, (err: Error | null, row: any) => {
      if (err) return console.error(err.message);

      return res.status(200).json(row);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const id = Date.now();
    const { todo, comment, completed, userId } = req.body;

    const todoItem = [id, todo, comment, completed, userId];
    await db.run(createOne, todoItem, (err: Error | null) => {
      if (err) return console.error(err.message);
    });

    await db.get(getOne, id, (err: Error | null, row: any) => {
      if (err) return console.error(err.message);

      return res.status(200).json(row);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { todo, comment, completed, userId } = req.body;

    const todoItem = [todo, comment, completed, userId, id];
    await db.run(updateOne, todoItem, (err: Error | null) => {
      if (err) return console.error(err.message);
    });

    await db.get(getOne, id, (err: Error | null, row: any) => {
      if (err) return console.error(err.message);

      return res.status(200).json(row);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.run(deleteOne, id, (err: Error | null) => {
      if (err) return console.error(err.message);

      return res.status(204).json({ message: 'Todo deleted successfully!' });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};
