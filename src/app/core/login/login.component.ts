import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';

import { UserService } from '@shared/user.service';
import * as fromRoot from '../../state/app.state';
import * as authActions from '../state/auth.actions';
import * as fromAuth from '../state/auth.reducer';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  errorMessage = '';
  componentActive = true;

  constructor(private userService: UserService,
              private router: Router,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    });

    this.store.pipe(
      select(fromAuth.getIsLogged),
      takeWhile(() => this.componentActive)
    ).subscribe(
      isLogged => this.isLoggedChanged(isLogged)
    );

    this.store.pipe(
      select(fromAuth.getLoginErrorMessage),
      takeWhile(() => this.componentActive)
    ).subscribe(
      errorMessage => this.errorMessageChanged(errorMessage)
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onSubmit() {
    const payload = {
      name: this.loginForm.value.login,
      password: this.loginForm.value.password
    };

    this.store.dispatch(new authActions.Login(payload));
  }

  isLoggedChanged(isLogged: boolean) {
    if (isLogged) {
      this.router.navigate(['/courses']);
    }
  }

  errorMessageChanged(message: string | null) {
    if (message) {
      this.errorMessage = message;
    }
  }
}
