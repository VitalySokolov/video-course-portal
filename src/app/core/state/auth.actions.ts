import { AuthData } from '@shared/auth-data.model';
import { User } from '@shared/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFail = '[Auth] Login Fail',
  Logout = '[Auth] Logout'
}

export class Login {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: AuthData) {
  }
}

export class LoginSuccess {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: User) {
  }
}

export class LoginFail {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public payload: string) {
  }
}

export class Logout {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = Login
  | LoginSuccess
  | LoginFail
  | Logout;
