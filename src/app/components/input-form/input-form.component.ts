import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Output() onCreateEvent = new EventEmitter<{title: string, description: string, completed: boolean}>

  titleValue = '';
  descriptionValue = '';

  public onCreate() {
    this.onCreateEvent.emit({ title: this.titleValue, description: this.descriptionValue, completed: false })
  }
}
