import { Component } from '@angular/core';
import { SummaryResponse } from '../../../interfaces';
import { Subscription } from 'rxjs';
import { MainService } from '../../../service/main.service';

@Component({
  selector: 'app-main',
  standalone: false,
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  summaryResponse!: SummaryResponse;
  habilities: string[] = [];
  trainings: string[] = [];

  subscriptions: Subscription[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getSummaryFromServer();
    this.getHabilitiesFromServer();
    this.getTrainingsFromServer();
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
