import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { IdentificationResponse } from '../../../interfaces';
import { IndentificationService } from '../../../service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy{
  identificationResponse!: IdentificationResponse;
  subscriptions: Subscription[] = [];

  constructor(private identificationService: IndentificationService) {}

  ngOnInit(): void {
    const subscription = this.identificationService.getIdentification().subscribe(
      {
        next: identificationResponse => this.identificationResponse = identificationResponse,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get nameAndSurname(): string {
    const identification = this.identificationResponse.identification;
    return `${identification.name} ${identification.surname}`;
  }
}
