import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceMock {
  getBrowserLang(): string {
    return 'en';
  }

  use(key: string): any {
    return null;
  };
}
