import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../state/app.state';
import * as fromAuth from '@core/state/auth.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<fromRoot.State>,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.pipe(
      select(fromAuth.getIsLogged),
      tap(isLogged => {
        if (!isLogged) {
          this.router.navigate(['/login']);
        }
      }),
      take(1)
    );
  }
}
