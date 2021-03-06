import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { AuthData } from './auth-data.model';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  const userName = 'name';
  const validUser: AuthData = {
    name: userName,
    password: 'password'
  };
  const authResponse = {
    token: '12345678'
  };
  const testLoginUrl = 'http://localhost:3004/auth/login';
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [UserService]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should perform login', inject([UserService], (service: UserService) => {
    service.login(validUser)
      .subscribe(data => {
        expect(data).toEqual(authResponse);
        expect(service.isAuthorized()).toBe(true);
      });

    const req = httpTestingController.expectOne(testLoginUrl);
    req.flush(authResponse);
  }));

  it('should perform logout', inject([UserService], (service: UserService) => {
    service.login(validUser)
      .subscribe(data => {
        expect(service.isAuthorized()).toBe(true);
      });

    const req = httpTestingController.expectOne(testLoginUrl);
    req.flush(authResponse);

    service.logout();
    expect(service.isAuthorized()).toBe(false);
  }));

  it('should not be authorized before login', inject([UserService], (service: UserService) => {
    expect(service.isAuthorized()).toBe(false);
  }));

  it('should return current user', inject([UserService], (service: UserService) => {
    service.login(validUser)
      .subscribe(data => {
        expect(service.isAuthorized()).toBe(true);
      });

    const req = httpTestingController.expectOne(testLoginUrl);
    req.flush(authResponse);

    expect(service.getUserInfo().name).toBe(userName);
  }));
});
