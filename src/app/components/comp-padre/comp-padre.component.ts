import { Component } from '@angular/core';
import { CompHijoComponent } from '../comp-hijo/comp-hijo.component';

@Component({
  selector: 'app-comp-padre',
  standalone: true,
  imports: [
    CompHijoComponent,
  ],
  templateUrl: './comp-padre.component.html',
  styleUrl: './comp-padre.component.css'
})
export class CompPadreComponent {
  txtInput: string = ""
  txtSaliente: string = ""
  txtArea: string = ""

  handleKeyUp(value: string) {
    this.txtInput = value
  }

  handleClick() {
    this.txtSaliente = this.txtInput
    console.log(this.txtSaliente)
  }

  addTxtEntrante(value: string) {
    this.txtArea = value
  }
}
