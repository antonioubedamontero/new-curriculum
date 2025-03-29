import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './service/loading.service';

interface SEOMetaTags {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  isLoading = true;

  spinnerSubscription?: Subscription;
  translateServiceSubscription?: Subscription;

  constructor(
    public titleService: Title,
    public metaService: Meta,
    public translate: TranslateService,
    public loadingService: LoadingService
  ){}

  async ngOnInit() {
    this.setLanguage();
    this.manageSpinner();

    // TODO: Angular universal is not compatible nowadays with Angular 19. Not included.
    this.setSEO();
  }

  ngOnDestroy(): void {
    this.spinnerSubscription?.unsubscribe();
    this.translateServiceSubscription?.unsubscribe();
  }

  setLanguage() {
    // Configure language on initial load
    const storedLang = localStorage.getItem('language');

    if (storedLang) {
      this.translate.use(storedLang);
      return;
    }

    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang && ['en', 'es'].includes(browserLang) ? browserLang : 'es';
    this.translate.use(defaultLang);
    localStorage.setItem('language', defaultLang);
  }

  manageSpinner(): void {
    this.spinnerSubscription = this.loadingService.loadingSubject
        .subscribe(isLoading => this.isLoading = isLoading );
  }

  setSEO(): void {
    this.translateServiceSubscription = this.translate.get('SEO').subscribe(SEO => {
      this.setSEOTitle(SEO.title);
      this.setSEOMetaTags(SEO.metaTags);
    });
  }

  setSEOTitle(SEOTitle: string): void {
    this.titleService.setTitle(SEOTitle);
  }

  setSEOMetaTags(SEOMetaTags: SEOMetaTags): void {
    this.metaService.addTags([
      { name: 'author', content: SEOMetaTags['author'] },
      { name: 'description', content: SEOMetaTags['description'] },
      { name: 'keywords', content: SEOMetaTags['keywords'] }
    ]);
  }
}
