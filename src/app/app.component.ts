import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {}

  async ngOnInit() {
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
}
