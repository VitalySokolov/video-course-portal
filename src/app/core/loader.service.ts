import { Subject } from 'rxjs';
import { LoaderState } from '@core/loader-state.model';

export class LoaderService {

  private loaderState = new Subject<LoaderState>();

  public getLoaderState() {
    return this.loaderState;
  }

  public startLoading() {
    this.loaderState.next({loading: true});
  }

  public finishLoading() {
    this.loaderState.next({loading: false});
  }
}
