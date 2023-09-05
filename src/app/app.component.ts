import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Store
import { Store } from '@ngrx/store';
import { loadTodos, createTodo, deleteTodo } from './store/todo.actions'
import { selectAllTodos } from './store/todo.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource =  new MatTableDataSource()
  dataSourceSubscription

  constructor(private readonly store: Store) {
    this.store.dispatch(loadTodos())

    this.dataSourceSubscription = this.store.select(selectAllTodos)
      .subscribe(todosData => this.dataSource.data = todosData.todos);
  }

  ngOnDestroy(): void {
    this.dataSourceSubscription.unsubscribe();
  }

  public onDelete(element: {id:string}) {
    this.store.dispatch(deleteTodo({ id: element.id }));
  }

  public onCreate(todo: {title: string, description:string, completed: boolean}) {
    this.store.dispatch(createTodo(todo));
  }

  public onFilter(characters: string){
    this.dataSource.filter = characters.trim().toLowerCase();
  }
}
