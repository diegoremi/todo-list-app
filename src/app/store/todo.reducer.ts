import { Action, createReducer, on } from '@ngrx/store';
import { createTodo, deleteTodo, loadTodos, loadTodosSuccess, loadTodosFailure, editTodo } from './todo.actions';

import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interfaces/todo.interface';

export interface TodosState {
    todos: Todo[],
    status: string
}


export const initialState: TodosState = {
    todos: [],
    status: 'pending'
}

export const todosReducer = createReducer(
    initialState,
    on(createTodo, (state, { title, description, completed }) => ({...state, todos: state.todos.some((todo) => {
     return todo.title === title || todo.description === description
    }) ? state.todos : [...state.todos, { id: uuidv4(), title, description, completed }]})),
    on(editTodo, (state, { id, title, description, completed }) => ({...state, todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, title, description, completed } : todo)})),
    on(deleteTodo, (state, { id }) => ({...state, todos: state.todos.filter((todo) => todo.id !== id)})),
    on(loadTodos, (state) => ({...state, status: 'loading'})),
    on(loadTodosSuccess, (state, { todos }) => ({...state, todos, status: 'success'})),
    on(loadTodosFailure, (state) => ({...state, status: 'error'})),
)

export function reducer(state: TodosState | undefined, action: Action) {
    return todosReducer(state, action);
}
