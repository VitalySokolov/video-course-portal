import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { UserService } from '@shared/user.service';
import * as authActions from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  constructor(private userService: UserService,
              private actions: Actions) {
  }

  @Effect()
  userLogin: Observable<Action> = this.actions.pipe(
    ofType(authActions.AuthActionTypes.Login),
    switchMap(action => this.userService.login().pipe(
      map(user => (new authActions.LoginSuccess(user))),
      catchError(err => of(new authActions.LoginFail(err)))
    ))
  );
}
