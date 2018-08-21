import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  template: `Login`
})
class TestLoginComponent {
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLoginComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes([{path: 'login', component: TestLoginComponent}])
      ],
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
