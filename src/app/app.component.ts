import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// Store
import { Store } from '@ngrx/store';
import { loadTodos, createTodo, deleteTodo, editTodo } from './store/todo.actions'
import { selectAllTodos } from './store/todo.selector';
import { Todo } from './interfaces/todo.interface';

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

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: any, filter: string | null) => !filter || data.completed.toString() == filter;
  }

  ngOnDestroy(): void {
    this.dataSourceSubscription.unsubscribe();
  }

  public onDelete(todo: {id:string}) {
    this.store.dispatch(deleteTodo({ id: todo.id }));
  }

  public onEdit(todo: Todo){
    this.store.dispatch(editTodo(todo))
  }

  public onCreate(todo: {title: string, description:string, completed: boolean}) {
    this.store.dispatch(createTodo(todo));
  }

  public onFilter(status: string){
    if(status === 'Completed'){
      this.dataSource.filter = "true";
    } else if (status === 'Active'){
      this.dataSource.filter = "false";
    } else {
      this.dataSource.filter = "";
    }

    // this.dataSource.filter = characters.trim().toLowerCase();
  }
}
