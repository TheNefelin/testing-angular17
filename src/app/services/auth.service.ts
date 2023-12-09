import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable()

  constructor(private router: Router) { }

  logIn() {
    this.loggedIn.next(true)
    this.redirectToHome()
  }

  logOut() {
    this.loggedIn.next(false)
    this.redirectToHome()
  }

  private redirectToHome() {
    this.router.navigate(["/"])
  }
}
