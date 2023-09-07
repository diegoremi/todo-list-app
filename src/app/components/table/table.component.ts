import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from '../../interfaces/todo.interface';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource = new MatTableDataSource();
  @Output() onDeleteEvent = new EventEmitter<{id: string}>
  @Output() onEditEvent = new EventEmitter<Todo>

  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['title', 'description', 'status', 'status-check', 'delete', 'edit'];
  selection = new SelectionModel<Todo>(true, []);

  constructor(public dialog: MatDialog){}

  ngOnInit() {
    this.dataSource.sortData = this.sortData();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  public onDelete(element: Todo) {
    this.onDeleteEvent.emit({ id: element.id })
  }

  public onEdit(element: Todo){
    this.onEditEvent.emit({...element, title: element.title, description: element.description})
  }

  public onTodoCompleted(element: Todo) {
    this.onEditEvent.emit({...element, completed: !element.completed})
  }

  public openDialog(element: Todo): void {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: element
    });

    dialogRef.afterClosed().subscribe(result => {
      this.onEdit({...element, title: result.title, description: result.description});
    });
  }

  private sortData() {
    let sortFunction =
    (items: Todo[], sort: MatSort): Todo[] =>  {
      if (!sort.active || sort.direction === '') {
        return items;
      }
     return items.sort((a: Todo, b: Todo) => {
       let comparatorResult = 0;
       switch (sort.active) {
         case 'status':
          comparatorResult = a.completed.toString().localeCompare(b.completed.toString()) ;
          break;
         default:
           comparatorResult = a.description.localeCompare(b.description);
           break;
       }
       return comparatorResult * (sort.direction == 'asc' ? 1 : -1);
      });
    };
    return sortFunction;
   }
}
