import { Action, createReducer, on } from '@ngrx/store';
import { createTodo, deleteTodo, loadTodos, loadTodosSuccess, loadTodosFailure } from './todo.actions';

import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../interfaces/todo.interface';

export interface TodosState {
    todos: Todo[],
    status: 'pending' | 'loading' | 'error' | 'success'
}


export const initialState: TodosState = {
    todos: [],
    status: 'pending'
}

export const todosReducer = createReducer(
    initialState,
    on(createTodo, (state, { title, description, completed }) => ({...state, todos: [...state.todos, { id: uuidv4(), title, description, completed }]})),
    on(deleteTodo, (state, { id }) => ({...state, todos: state.todos.filter((todo) => todo.id !== id)})),
    on(loadTodos, (state) => ({...state, status: 'loading'})),
    on(loadTodosSuccess, (state, { todos }) => ({...state, todos, status: 'success'})),
    on(loadTodosFailure, (state) => ({...state, status: 'error'})),
)

export function reducer(state: TodosState | undefined, action: Action) {
    return todosReducer(state, action);
}
