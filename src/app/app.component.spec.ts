import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './app.module';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  template: '<p>layout</p>',
})
export class LayoutComponentMock{}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
      declarations: [
        AppComponent,
        LayoutComponentMock
      ],
      providers: [
        provideHttpClient(withFetch())  // Configure HttpClient when using with modules
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
