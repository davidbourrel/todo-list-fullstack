export const getAll = 'SELECT * FROM Todos ORDER BY todo';

export const getOne = 'SELECT * FROM Todos WHERE TodoId = ?';

export const createOne =
  'INSERT INTO Todos (todoId, todo, comments, completed, userId) VALUES (?, ?, ?, ?, ?)';

export const updateOne =
  'UPDATE Todos SET todo = ?, comments = ?, completed = ?, userId = ? WHERE (todoId = ?)';

export const deleteOne = 'DELETE FROM Todos WHERE todoId = ?';
