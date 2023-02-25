import { createContext } from 'react';
import { INITIAL_TODO_CONTEXT } from './todo.const';

const todoContext = createContext(INITIAL_TODO_CONTEXT);

export default todoContext;
