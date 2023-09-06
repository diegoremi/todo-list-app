import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() onFilterEvent = new EventEmitter<string>

  selectedOption: string | undefined;
  options: string[] = ['All', 'Active', 'Completed'];

  public onFilter() {
    this.onFilterEvent.emit(this.selectedOption);
  }
}
