import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { AuthData } from './auth-data.model';

describe('UserService', () => {
  const userName = 'name';
  const validUser: AuthData = {
    name: userName,
    password: 'password'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should perform login', inject([UserService], (service: UserService) => {
    service.login(validUser);
    expect(service.isAuthorized()).toBe(true);
  }));

  it('should perform logout', inject([UserService], (service: UserService) => {
    service.login(validUser);
    expect(service.isAuthorized()).toBe(true);

    service.logout();
    expect(service.isAuthorized()).toBe(false);
  }));

  it('should not be authorized before login', inject([UserService], (service: UserService) => {
    expect(service.isAuthorized()).toBe(false);
  }));

  it('should be authorized after login', inject([UserService], (service: UserService) => {
    service.login(validUser);
    expect(service.isAuthorized()).toBe(true);
  }));

  it('should return current user', inject([UserService], (service: UserService) => {
    service.login(validUser);
    expect(service.getUserInfo().name).toBe(userName);
  }));
});
