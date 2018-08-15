import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from './auth.guard';
import { Component } from '@angular/core';

@Component({
  template: `Login`
})
class TestLoginComponent {
}

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestLoginComponent],
      imports: [RouterTestingModule.withRoutes([{path: 'login', component: TestLoginComponent}])],
      providers: [AuthGuard]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
