import { TestBed } from '@angular/core/testing';

import { IndentificationService } from './indentification.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';



describe('IndentificationService', () => {
  let service: IndentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        provideHttpClient(withFetch())  // Configure HttpClient when using with modules
      ]
    });
    service = TestBed.inject(IndentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
