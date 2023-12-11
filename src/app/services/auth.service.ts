import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { GoogleUserInfo } from '../interfaces/google-user-info';

const authConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: "529904203616-rpd70g5dqapdh57aptbk01k6tkmgsppk.apps.googleusercontent.com",
  scope: "openid profile"
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo$ = new Subject<GoogleUserInfo>()

  constructor(
    private readonly oAuthService: OAuthService,
    private router: Router
  ) {}

  isLoggedIn() {
    return this.oAuthService.hasValidAccessToken()
  }

  async logIn() {
    this.oAuthService.configure(authConfig)

    await this.oAuthService.loadDiscoveryDocument()
    await this.oAuthService.tryLoginImplicitFlow()

    if (!this.oAuthService.hasValidAccessToken()) {
      this.oAuthService.initLoginFlow()
      console.log("-- Login FF -----")
    } else {
      this.oAuthService.loadUserProfile().then(user => {
        this.userInfo$.next(user as GoogleUserInfo)
        console.log("-- Login OK -----")
        console.log(this.userInfo$)
      })
    }

    this.router.navigateByUrl("/")
  }

  logOut() {
    this.oAuthService.logOut()
    // this.userInfo$.unsubscribe()
    this.router.navigateByUrl("/")
  }

}
