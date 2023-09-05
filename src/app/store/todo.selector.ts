import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodosState } from "./todo.reducer";

export const selectTodos = createFeatureSelector<TodosState>('todos');
export const selectAllTodos = createSelector(
    selectTodos,
    (state: TodosState) => state
)
