export const getAll = 'SELECT * FROM Todos ORDER BY todo';

export const getOne = 'SELECT * FROM Todos WHERE id = ?';

export const createOne =
  'INSERT INTO Todos (id, todo, comment, completed, userId) VALUES (?, ?, ?, ?, ?)';

export const updateOne =
  'UPDATE Todos SET todo = ?, comment = ?, completed = ?, userId = ? WHERE id = ?';

export const deleteOne = 'DELETE FROM Todos WHERE id = ?';
