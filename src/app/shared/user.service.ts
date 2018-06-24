import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
  }

  public getCurrentUser(): User {
    return {
      name: 'Current User',
      eMail: 'current_user@email.com',
      password: ''
    };
  }
}
