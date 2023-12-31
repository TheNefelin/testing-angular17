import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import { GoogleUserInfo } from '../interfaces/google-user-info';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

const authConfig: AuthConfig = {
  issuer: "https://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: environment.GOOGLE_ID,
  scope: "openid profile email",
}

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  userInit: GoogleUserInfo = { info: { sub: "", email: "", name: "", picture: "" }}

  //observable que solo emite valores
  private userInfo = new BehaviorSubject<GoogleUserInfo>(this.userInit)

  private processStatusSub = new BehaviorSubject<boolean>(false);
  processStatus$ = this.processStatusSub.asObservable();

  constructor(
    private readonly oAuthService: OAuthService,
    private router: Router,
  ) {
    console.log(environment.GOOGLE_ID)
    this.oAuthService.configure(authConfig)

    this.oAuthService.loadDiscoveryDocument().then(() => {
      this.oAuthService.tryLoginImplicitFlow().then(() => {
        if (this.oAuthService.hasValidAccessToken()) {
          this.oAuthService.loadUserProfile().then(googleUser => {
            this.userInfo.next(googleUser as GoogleUserInfo)
          })
        }
      })
    })
  }

  get getUserInfo() {
    return this.userInfo.asObservable()
  }

  logIn() {
    this.oAuthService.initLoginFlow()
    this.router.navigateByUrl('/');
    console.log("-- LogIn --")
  }

  logOut() {
    this.oAuthService.logOut()
    this.userInfo.next(this.userInit)
    this.router.navigateByUrl('/');
    console.log("-- LogOut --")
  }

  isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken()
  }

}
