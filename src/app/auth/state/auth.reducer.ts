import { User } from '@shared/user.model';
import { AuthActions, AuthActionTypes } from '@auth/state/auth.actions';

export interface AuthState {
  isLogged: boolean;
  currentUser: User;
}

const initialState: AuthState = {
  isLogged: false,
  currentUser: null
};

export function reducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        isLogged: true,
        currentUser: action.payload
      };

    default:
      return state;
  }
}
