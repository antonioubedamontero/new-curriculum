/* eslint-disable @angular-eslint/prefer-standalone */
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { MainService } from '../../services';
import { SummaryResponse, WorkExperienceResponseDetail, WorkExperiencesResponse } from '../../interfaces';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy{
  summaryResponse!: SummaryResponse;

  habilities: string[] = [];
  trainings: string[] = [];
  languages: string[] = [];
  developerExperiences!: WorkExperiencesResponse;

  subscriptions: Subscription[] = [];

  constructor(private readonly mainService: MainService) {}

  ngOnInit(): void {
    this.getSummaryFromServer();
    this.getHabilitiesFromServer();
    this.getTrainingsFromServer();
    this.getLanguagesFromServer();
    this.getDeveloperExperiencesFromServer();
  }

  getSummaryFromServer(): void {
    const subscription = this.mainService.getSummary().subscribe(
      {
        next: summaryResponse => this.summaryResponse = summaryResponse,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  getHabilitiesFromServer(): void {
    const subscription = this.mainService.getHabilities().subscribe(
      {
        next: habilitiesResponse => this.habilities = habilitiesResponse.habilities,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  getTrainingsFromServer(): void {
    const subscription = this.mainService.getTrainings().subscribe(
      {
        next: trainingsResponse => this.trainings = trainingsResponse.trainings,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  getLanguagesFromServer(): void {
    const subscription = this.mainService.getLanguages().subscribe(
      {
        next: languagesResponse => this.languages = languagesResponse.languages,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  getDeveloperExperiencesFromServer(): void {
    const subscription = this.mainService.getDeveloperWorkExperiences().subscribe(
      {
        next: developerExperiences => this.developerExperiences = developerExperiences,
        error: error => console.error(error)
      }
    );
    this.subscriptions.push(subscription);
  }

  get developerExperiencesSections(): string[] {
    if (!this.developerExperiences) {
      return [];
    }

    return Object.keys(this.developerExperiences);
  }

  getDeveloperExperiencesSectionDetails(developerExperienceSection: string): WorkExperienceResponseDetail {
    return this.developerExperiences[developerExperienceSection];
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
