import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { LoadingService } from './services/loading.service';
import { TranslationService } from './services/translation.service';

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
    public translationService: TranslationService,
    public loadingService: LoadingService
  ){}

  async ngOnInit() {
    const browserLang = this.translationService.getBrowserLang();
    this.translationService.setLanguage(browserLang);
    this.translationService.setSEO();

    this.manageSpinner();
  }

  ngOnDestroy(): void {
    this.spinnerSubscription?.unsubscribe();
  }

  manageSpinner(): void {
    this.spinnerSubscription = this.loadingService.loadingSubject
        .subscribe(isLoading => this.isLoading = isLoading );
  }
}
