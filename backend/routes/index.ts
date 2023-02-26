import { Application } from 'express';
import todosRoute from './todos';

export const register = (app: Application) => {
  app.use('/todos', todosRoute);
};
