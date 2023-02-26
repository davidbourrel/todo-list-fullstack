import dotenv from 'dotenv';
import express from 'express';
import * as routes from './routes';
import { SQL_CREATE, SQL_INSERT } from './data/const';
const cors = require('cors');
const helmet = require('helmet');
const sqlite3 = require('sqlite3').verbose();
const PORT = process.env.PORT || 5000;

// Initialize configuration
dotenv.config();

// Create Express server
const app = express();

// SQlite connection
const FILE_SQLITE_DB = 'data/todolist.db';
export const db = new sqlite3.Database(FILE_SQLITE_DB, (err: Error | null) => {
  if (err) {
    return console.error(err.message);
  }
  console.log(`Database connection successfull`);
});

db.serialize(() => {
  // Create a table Todos (todoId, todo, comments, completed, userId)
  db.run(SQL_CREATE, (err: Error | null) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Table 'Todos' created`);
  });
  // Insert data into the table
  db.run(SQL_INSERT, (err: Error | null) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(`Data  'Todos' inserted`);
  });
});

// Pre-route middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
routes.register(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
