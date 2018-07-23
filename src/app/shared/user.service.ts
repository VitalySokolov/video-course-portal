import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// {
//   name: 'Current User',
//   eMail: 'current_user@email.com',
//   password: ''
// }

  private user: User;

  public getUserInfo(): User {
    return this.user;
  }

  public login(user: User): void {
    this.user = user;
  }

  public logout(): void {
    this.user = null;
  }

  public isAuthorized(userName: string): boolean {
    return !!this.user && this.user.name === userName;
  }
}
