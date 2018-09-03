import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderState = new Subject<boolean>();

  public getLoaderState() {
    return this.loaderState;
  }

  public startLoading() {
    this.loaderState.next(true);
  }

  public finishLoading() {
    this.loaderState.next(false);
  }
}
