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
  errorMessage = '';

  public onCreate() {
    if(this.titleValue && this.descriptionValue) {
      this.errorMessage = ''
      this.onCreateEvent.emit({ title: this.titleValue, description: this.descriptionValue, completed: false })
    } else if(!this.titleValue) {
      this.errorMessage = 'Please input a title'
    } else if(!this.descriptionValue) {
      this.errorMessage = 'Please input a description'
    } else {
      this.errorMessage = 'Please input both title and description'
    }
  }
}
