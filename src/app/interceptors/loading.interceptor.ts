import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../service/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private readonly loadingService: LoadingService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showSpinner(); // Show spinner at begginig of request

    return next.handle(req).pipe(
      finalize(
        () => this.loadingService.hideSpinner() // Hide spinner when request has finished
      )
    );
  }
}
