import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PhoneComponent } from './components/phone/phone.component';
import { CompPadreComponent } from './components/comp-padre/comp-padre.component';
import { ValidateRutComponent } from './components/validate-rut/validate-rut.component';
import { ObservadorComponent } from './components/observador/observador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    PhoneComponent,
    CompPadreComponent,
    ValidateRutComponent,
    ObservadorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testing-angular17';
}
