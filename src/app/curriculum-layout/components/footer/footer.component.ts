/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { DateTime } from 'luxon';
import { IdentificationResponse } from '../../interfaces';
import { IndentificationService } from '../../services';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear: string = DateTime.now().year.toString();
  identificationResponse!: IdentificationResponse;
  subscriptions: Subscription[] = [];

  constructor(private readonly identificationService: IndentificationService) {}

  ngOnInit(): void {
    const susbscription = this.identificationService.getIdentification().subscribe({
      next: response => this.identificationResponse = response,
      error: error => console.error(error)
    });
    this.subscriptions.push(susbscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get nameAndSurname(): string {
    const identification = this.identificationResponse.identification;
    return `${identification.name} ${identification.surname}`;
  }
}
