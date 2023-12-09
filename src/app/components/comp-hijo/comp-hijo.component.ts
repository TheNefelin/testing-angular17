import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comp-hijo',
  standalone: true,
  imports: [],
  templateUrl: './comp-hijo.component.html',
  styleUrl: './comp-hijo.component.css'
})
export class CompHijoComponent {
  @Input() txtEntrante: string = ""
  @Output() newTxtSalienteEvent = new EventEmitter<string>()
  txtInput: string = ""

  addNewTxtSalienteEvent(value: string) {
    this.newTxtSalienteEvent.emit(value);
  }
}
