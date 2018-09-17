import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '@shared/user.model';
import { AuthActions, AuthActionTypes } from '@core/state/auth.actions';

export interface AuthState {
  isLogged: boolean;
  currentUser: User | null;
  loginErrorMessage: string | null;
}

const initialState: AuthState = {
  isLogged: false,
  currentUser: null,
  loginErrorMessage: null
};

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const getIsLogged = createSelector(
  getAuthFeatureState,
  state => state.isLogged
);

export const getLoginErrorMessage = createSelector(
  getAuthFeatureState,
  state => state.loginErrorMessage
);

export const getCurrentUser = createSelector(
  getAuthFeatureState,
  state => state.currentUser
);

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        isLogged: true,
        currentUser: action.payload
      };

    case AuthActionTypes.LoginFail:
      return {
        ...state,
        isLogged: false,
        loginErrorMessage: action.payload
      };

    case AuthActionTypes.Login:
      return {
        ...state,
        loginErrorMessage: null
      };

    case AuthActionTypes.Logout:
      return {
        ...state,
        isLogged: false,
        currentUser: null
      };

    default:
      return state;
  }
}
