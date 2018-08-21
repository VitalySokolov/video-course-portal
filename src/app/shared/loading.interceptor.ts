import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

export class LoadingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Inside LOADING');

    return next.handle(req).pipe(
      delay(1000),
      tap((event) => {
        if (event instanceof HttpResponse) {
          console.log('RESPONSE');
        }
      })
    );
  }
}
