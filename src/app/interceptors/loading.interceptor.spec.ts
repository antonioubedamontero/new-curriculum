import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from '../curriculum-layout/services/loading.service';

describe('LoadingInterceptor', () => {
  let loadingService: jasmine.SpyObj<LoadingService>;
  let interceptor: LoadingInterceptor;
  let next: jasmine.SpyObj<HttpHandler>;

  beforeEach(() => {
    const loadingServiceSpy = jasmine.createSpyObj('LoadingService', ['showSpinner', 'hideSpinner']);
    const nextSpy = jasmine.createSpyObj('HttpHandler', ['handle']);

    TestBed.configureTestingModule({
      providers: [
        LoadingInterceptor,
        { provide: LoadingService, useValue: loadingServiceSpy },
      ],
    });

    loadingService = TestBed.inject(LoadingService) as jasmine.SpyObj<LoadingService>;
    interceptor = TestBed.inject(LoadingInterceptor);
    next = nextSpy;
  });

  it('should call show() and hide() on the LoadingService', (done) => {
    const req = new HttpRequest('GET', '/test');
    const mockEvent$ = of({} as HttpEvent<unknown>);

    next.handle.and.returnValue(mockEvent$);

    interceptor.intercept(req, next).pipe(
      finalize(() => {
        // Verifica que se llamaron a show() y hide()
        expect(loadingService.showSpinner).toHaveBeenCalled();
        expect(loadingService.hideSpinner).toHaveBeenCalled();
        done();
      })
    ).subscribe();
  });
});
