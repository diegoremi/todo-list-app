import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Todo } from '../../interfaces/todo.interface';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource = new MatTableDataSource();
  @Output() onDeleteEvent = new EventEmitter<{id: string}>

  displayedColumns: string[] = ['name', 'description', 'delete'];

  public onDelete(element: Todo) {
    this.onDeleteEvent.emit({ id: element.id })
  }

}
