import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { User } from './user.model';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = 'http://localhost:3004';
  public authChange = new Subject<User>();
  private user: User;

  constructor(private http: HttpClient, private router: Router) {
  }

  public getUserInfo(): User {
    return {...this.user};
  }

  public login(user: AuthData) {
    return this.http.post<{ token: string }>(`${this.BASE_URL}/auth/login`, {login: user.name, password: user.password})
      .pipe(
        tap((response) => {
          this.user = {
            name: user.name,
            token: response.token
          };
          this.authChange.next(this.user);
        })
      );
  }

  public logout(): void {
    this.user = null;
    this.authChange.next(null);
    this.router.navigate(['/login']);
  }

  public isAuthorized(): boolean {
    return !!this.user;
  }
}
