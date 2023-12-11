import { Component, OnInit } from '@angular/core';
import { GoogleUserInfo } from '../../interfaces/google-user-info';
import { Observable } from 'rxjs';
import { AuthGoogleService } from '../../services/auth-google.service';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent
  ],
  providers: [
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  userInfo$?: Observable<GoogleUserInfo>

  constructor(private authGoogleService: AuthGoogleService) {
    this.userInfo$ = authGoogleService.getUserInfo;
  }

  ngOnInit(): void {
    console.log(this.userInfo$)    
  }

  logIn(){
    this.authGoogleService.logIn()
  }

  logOut() {
    this.authGoogleService.logOut()
  }

  isLoggedIn() {
    return this.authGoogleService.isLoggedIn()
  }

}
