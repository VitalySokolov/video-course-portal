import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BASE_URL = 'http://localhost:3004';
  public authChange = new Subject<boolean>();
  public authFailed = new Subject<string>();
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
    console.log(`Constructor. `);
    this.authFailed = new Subject<string>();
    this.authChange = new Subject<boolean>();
  }

  public getUserInfo(): User {
    return {...this.user};
  }

  public login(user: AuthData): void {
    this.http.post(`${this.BASE_URL}/auth/login`, {login: user.name, password: user.password})
      .subscribe(
        res => this.loginOk(res, user),
        error => this.loginFailed(error)
      );
  }

  private loginOk(response, user: AuthData) {
    this.user = {
      name: user.name,
      token: response.token
    };
    this.authChange.next(true);
    this.router.navigate(['/courses']);
  }

  public loginFailed(error) {
    this.authFailed.next(error.error);
  }

  public logout(): void {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  public isAuthorized(): boolean {
    return !!this.user;
  }
}
