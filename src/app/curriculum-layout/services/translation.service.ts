/* eslint-disable @typescript-eslint/consistent-indexed-object-style */
import { Injectable, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { Meta, Title } from '@angular/platform-browser';

export interface SEOMetaTags {
  [key: string]: string;
}

const availableLanguages = ['es', 'en'];

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements OnDestroy {
  currentLanguage = 'es';

  translateServiceSubscription?: Subscription;

  constructor(
    public translate: TranslateService,
    public titleService: Title,
    public metaService: Meta,
  ) { }

  ngOnDestroy(): void {
    this.translateServiceSubscription?.unsubscribe();
  }

  getBrowserLang(): string {
    return this.translate.getBrowserLang() ?? 'es';
  }



  setLanguage(language: string): void {
    this.currentLanguage = availableLanguages.includes(language) ? language : 'es';
    this.translate.use(this.currentLanguage);
    this.setSEO();
  }

  private setSEO(): void {
    this.translateServiceSubscription = this.translate.get('SEO').subscribe(SEO => {
      this.setSEOTitle(SEO.title);
      this.setSEOMetaTags(SEO.metaTags);
    });
  }

  private setSEOTitle(SEOTitle: string): void {
    this.titleService.setTitle(SEOTitle);
  }

  private setSEOMetaTags(SEOMetaTags: SEOMetaTags): void {
    this.metaService.addTags([
      { name: 'author', content: SEOMetaTags['author'] },
      { name: 'description', content: SEOMetaTags['description'] },
      { name: 'keywords', content: SEOMetaTags['keywords'] }
    ]);
  }
}
