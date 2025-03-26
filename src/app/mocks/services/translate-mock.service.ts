import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceMock {
  getBrowserLang(): string {
    return 'en';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  use(key: string): unknown {
    return null;
  };
}
