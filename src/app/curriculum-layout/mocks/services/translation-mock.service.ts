import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationMockService {
  currentLanguage = 'es';

  constructor() { }

  getBrowserLang(): string {
    return 'es';
  }

  setLanguage(language: string): void {
    this.currentLanguage = language;
  }

  get(key: string | string[]): unknown {
    return of(key);
  }

  use(lang: string): void {
    this.currentLanguage = lang;
  }
}
