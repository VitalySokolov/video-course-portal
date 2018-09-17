import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { select, Store } from '@ngrx/store';

import { AuthData } from './auth-data.model';
import * as fromRoot from '../state/app.state';
import * as fromAuth from '@core/state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly BASE_URL = 'http://localhost:3004';
  private isAuthorized = false;
  private authToken: string | null;

  constructor(private http: HttpClient,
              private store: Store<fromRoot.State>) {

    this.store.pipe(
      select(fromAuth.getIsLogged)
    ).subscribe(
      isLogged => this.isAuthorized = isLogged
    );

    this.store.pipe(
      select(fromAuth.getCurrentUser)
    ).subscribe(
      user => {
        if (!!user) {
          this.authToken = user.token;
        }
      }
    );
  }

  public getAuthToken(): string | null {
    return this.authToken;
  }

  public getIsAuthorized(): boolean {
    return this.isAuthorized;
  }

  public login(user: AuthData) {
    return this.http.post<{ token: string }>(`${this.BASE_URL}/auth/login`, {login: user.name, password: user.password});
  }

  // public logout(): void {
  //   // this.user = null;
  //   // this.authChange.next(null);
  //   // this.router.navigate(['/login']);
  // }
  //
  // public isAuthorized(): boolean {
  //   return !!this.user;
  // }
}
