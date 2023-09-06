import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
} from './todo.actions';
import { TodosService } from '../services/todo.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class TodosEffects {
  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() =>
        from(this.todosService.getTodos()).pipe(
          map((todos) => loadTodosSuccess({ todos })),
          catchError(() => of(loadTodosFailure()))
        )
      )
    )
  );
}
