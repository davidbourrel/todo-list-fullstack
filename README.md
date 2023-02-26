# Fullstack TODO LIST APP

**Stack**

- Frontend: NextJS, TypeScript Tailwind, Testing-library
- Backend: Express (nodejs), TypeScript, SQLITE

## FRONT-END FOLDER

Go to frontend folder :

```bash
cd frontend
```

Install dependances :

```bash
npm i
```

Start server :

```bash
npm run dev
```

## BACK-END FOLDER

Go to backend folder :

```bash
cd backend
```

Install dependances :

```bash
npm i
```

Start server :

```bash
npm start
```

## DATABASE (SQLITE)

### Insert Data

All data are insert when you start the server with **npm start** from _data/todolist.db_.

### Reset Data and recreate with mocked data

1. Go into backend folder and data folder
2. Delete : todolist.db
3. Back in root of backend folder and start the server with **npm start**

## End-points

- **getAllTodos**: GET http://localhost:5000/todos
- **getTodo**: GET http://localhost:5000/todos/ID
- **createTodo**: POST http://localhost:5000/todos
- **updateTodo**: PUT http://localhost:5000/todos/ID
- **deleteTodo**: DELETE http://localhost:5000/todos/ID
