import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { UserService } from '@shared/user.service';
import * as authActions from './auth.actions';
import { Login } from './auth.actions';

@Injectable()
export class AuthEffects {

  constructor(private userService: UserService,
              private actions: Actions,
              private router: Router) {
  }

  @Effect()
  userLogin: Observable<Action> = this.actions.pipe(
    ofType(authActions.AuthActionTypes.Login),
    switchMap((action: Login) => this.userService.login(action.payload).pipe(
      map(user => (new authActions.LoginSuccess({name: action.payload.name, token: user.token}))),
      catchError(err => of(new authActions.LoginFail(err.error)))
    ))
  );

  @Effect({ dispatch: false })
  userLogout: Observable<Action> = this.actions.pipe(
    ofType(authActions.AuthActionTypes.Logout),
    tap(() => {
      this.router.navigate(['/login']);
    })
  );
}
