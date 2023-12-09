import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) { }

  logIn() {
    this.loggedIn.next(true)
  }

  logOut() {
    this.loggedIn.next(false)
  }

  private redirectToHome() {
    this.router.navigate(["/"])
  }
}
