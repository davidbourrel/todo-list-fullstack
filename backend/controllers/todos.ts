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
      if (err) {
        return console.error(err.message);
      }
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
      if (err) {
        return console.error(err.message);
      }
      return res.status(200).json(row);
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { body } = req;

    const book = [body.Titre, body.Auteur, body.Commentaires];
    await db.run(createOne, book, (err: Error | null) => {
      if (err) {
        return console.error(err.message);
      }
      return res.status(201).json({ message: 'Todo added successfully!' });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const { id } = req.params;

    const book = [body.Titre, body.Auteur, body.Commentaires, id];

    await db.run(updateOne, book, (err: Error | null) => {
      if (err) {
        return console.error(err.message);
      }
      return res.status(204).json({ message: 'Todo updated successfully!' });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await db.run(deleteOne, id, (err: Error | null) => {
      if (err) {
        return console.error(err.message);
      }
      return res.status(204).json({ message: 'Todo deleted successfully!' });
    });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};