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
  subscriptions: Subscription[] = [];

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getSummaryFromServer();
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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
