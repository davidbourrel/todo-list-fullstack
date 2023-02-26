export const SQL_CREATE =
  'CREATE TABLE IF NOT EXISTS Todos ( id INTEGER PRIMARY KEY AUTOINCREMENT, todo VARCHAR(100) NOT NULL, comment TEXT, completed BOOLEAN NOT NULL, userId VARCHAR(100) NOT NULL )';

export const SQL_INSERT =
  "INSERT INTO Todos (id, todo, comment, completed, userId) VALUES (1, 'Watch a classic movie', 'Todo comment example 1',0, '5'),(2, 'Memorize the fifty states and their capitals', 'Todo comment example 2', 0, '5'),(3, 'Contribute code or a monetary donation to an open-source software project', 'Todo comment example 3', 1, '4'),(4, 'Go to the gym', 'Todo comment example 4', 1, '4')";
