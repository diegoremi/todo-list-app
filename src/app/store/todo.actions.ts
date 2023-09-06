import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo.interface';

export const createTodo = createAction('[Todos Component] Create Todo', props<{title: string, description: string, completed: boolean}>());
export const editTodo = createAction('[Todos Component] Edit Todo', props<{id: string, title: string, description: string, completed: boolean}>());
export const deleteTodo = createAction('[Todos Component] Delete Todo', props<{id: string}>());
export const loadTodos = createAction('[Todos Component] List Todos');
export const loadTodosSuccess = createAction('[Todos Component] Todos Load Success', props<{todos: Todo[]}>());
export const loadTodosFailure = createAction('[Todos Component] Todos Load Failure');
