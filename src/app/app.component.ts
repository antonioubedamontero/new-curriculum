/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TranslationService } from './curriculum-layout/services/translation.service';
import { LoadingService } from './curriculum-layout/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = true;

  spinnerSubscription?: Subscription;

  constructor(
    public translationService: TranslationService,
    public loadingService: LoadingService
  ){}

  ngOnInit() {
    const browserLang = this.translationService.getBrowserLang() ?? 'es';
    this.translationService.setLanguage(browserLang);

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
