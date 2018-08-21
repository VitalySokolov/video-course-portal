import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { UserService } from '@shared/user.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Inside AUTH');
    if (!this.userService.isAuthorized()) {
      return next.handle(req);
    }

    const authToken = this.userService.getUserInfo().token;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    return next.handle(authReq).pipe(
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('RESPONSE AUTH');
        }
      })
    );
  }
}
