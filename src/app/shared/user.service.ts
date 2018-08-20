import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { pipe, Subject } from 'rxjs';

import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly BASE_URL = 'http://localhost:3004';
  public authChange = new Subject<boolean>();
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
    this.authChange = new Subject<boolean>();
  }

  public getUserInfo(): User {
    return {...this.user};
  }

  public login(user: AuthData) {
    return this.http.post<any>(`${this.BASE_URL}/auth/login`, {login: user.name, password: user.password})
      .pipe(
      tap((response) => {
        this.user = {
          name: user.name,
          token: response.token
        };
        this.authChange.next(true);
      })
    );
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
