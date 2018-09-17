import { Component, OnDestroy, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import { User } from '@shared/user.model';
import { UserService } from '@shared/user.service';
import * as fromAuth from '@core/state/auth.reducer';
import * as fromRoot from '../../state/app.state';
import * as authActions from '../state/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUser: User;
  isAuth = false;
  private componentActive = true;

  constructor(private userService: UserService,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.pipe(
      select(fromAuth.getIsLogged),
      takeWhile(() => this.componentActive)
    ).subscribe(
      isLogged => this.isAuth = isLogged
    );

    this.store.pipe(
      select(fromAuth.getCurrentUser),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentUser => this.currentUser = {...currentUser}
    );

  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  onLogout() {
    this.store.dispatch(new authActions.Logout());
  }
}
