import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authChange = new Subject<boolean>();
  private user: User;

  constructor(private http: HttpClient) {
  }

  public getUserInfo(): User {
    return {...this.user};
  }

  public login(user: AuthData): void {
    this.http.post(`${BASE_URL}/auth/login`, {login: user.name, password: user.password})
      .subscribe((res) => {
          console.log(JSON.stringify(res));
        },
        ((error) => {
          console.log(JSON.stringify(error));
        }));

    this.user = {
      name: user.name,
      token: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
  }

  public logout(): void {
    this.user = null;
    this.authChange.next(false);
  }

  public isAuthorized(): boolean {
    return !!this.user;
  }
}
