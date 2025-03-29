import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/shared.module';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { BaseModule } from './base/base.module';

// Factory function to create the translation loader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    LayoutModule,
    SharedModule
  ],
  providers: [
    provideHttpClient(withFetch()),  // Configure HttpClient when using with modules
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
