import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { UserService } from '@shared/user.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.userService.isAuthorized()) {
      return next.handle(req);
    }

    const authToken = this.userService.getUserInfo().token;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

    return next.handle(authReq);
  }
}
