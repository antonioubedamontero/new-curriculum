import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loadingSubject = new BehaviorSubject<boolean>(false);

  showSpinner() {
    this.loadingSubject.next(true);
  }

  hideSpinner() {
    this.loadingSubject.next(false);
  }
}
