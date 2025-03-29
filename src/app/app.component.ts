import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnDestroy {
  isLoading = true;
  spinnerSubscription?: Subscription;

  constructor(
    public translate: TranslateService,
    public loadingService: LoadingService
  ){}

  async ngOnInit() {
    this.setLanguage();
    this.manageSpinner();
  }

  ngOnDestroy(): void {
    this.spinnerSubscription?.unsubscribe();
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
}
