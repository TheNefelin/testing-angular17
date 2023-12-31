import { Component } from '@angular/core';

@Component({
  selector: 'app-validate-rut',
  standalone: true,
  imports: [],
  templateUrl: './validate-rut.component.html',
  styleUrl: './validate-rut.component.css'
})
export class ValidateRutComponent {
  public msge: string = "Hola!!!";
  private rut: string = "";
  private ver: string = "";

  constructor() {}

  addTxt(value: string) {
    this.rut = value
    this.msge = ""
  }
  
  handleClick() {
    if(this.rut.length > 0){
      let cont: number = 2
      let suma: number = 0

      for (let i = this.rut.length -1; i >= 0; i--) {
        if (cont > 7) cont = 2
  
        suma = suma + parseInt(this.rut[i]) * cont
  
        cont += 1
      }

      const res = 11 - (suma % 11)

      if (res === 11) this.ver = "0"
      this.ver = (res === 10) ? "K" : res.toString()  

      this.msge = `${this.rut} - ${this.ver}`;
    };
  };
}
