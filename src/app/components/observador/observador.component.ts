import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-observador',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './observador.component.html',
  styleUrl: './observador.component.css'
})
export class ObservadorComponent {
  isLogin$ = this.auth.loggedIn$

  constructor(private auth: AuthService) {}

  logIn(){
    this.auth.logIn()
  }

  logOut() {
    this.auth.logOut()
  }  
}
