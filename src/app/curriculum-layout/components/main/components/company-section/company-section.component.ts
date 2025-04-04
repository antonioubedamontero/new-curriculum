import { Component, Input, OnChanges } from '@angular/core';
import { WorkExperienceItemResponse } from '../../../../interfaces';

@Component({
  selector: 'app-company-section',
  standalone: false,
  templateUrl: './company-section.component.html',
  styleUrl: './company-section.component.scss'
})
export class CompanySectionComponent implements OnChanges{
  @Input() companyExperience!: WorkExperienceItemResponse;

  constructor() {}

  ngOnChanges(): void {
    this.checkMandatoryInputs();
  }

  private checkMandatoryInputs(): void {
    if (!this.companyExperience) {
      throw new Error('Missing company experience in Company Section Component');
    }
  }
}
