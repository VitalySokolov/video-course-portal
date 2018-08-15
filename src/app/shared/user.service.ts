import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) {
  }

  public getUserInfo(): User {
    return {...this.user};
  }

  public login(user: AuthData): void {
    this.user = {
      name: user.name,
      token: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/courses']);
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
