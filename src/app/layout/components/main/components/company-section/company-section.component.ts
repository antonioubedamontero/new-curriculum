import { Component, Input, OnInit } from '@angular/core';

import { WorkExperienceItemResponse } from '../../../../../interfaces/workExperience-response.interface';

@Component({
  selector: 'app-company-section',
  standalone: false,
  templateUrl: './company-section.component.html',
  styleUrl: './company-section.component.scss'
})
export class CompanySectionComponent implements OnInit{
  @Input() companyExperience!: WorkExperienceItemResponse;

  constructor() {}

  ngOnInit(): void {
    this.checkMandatoryInputs();
  }

  private checkMandatoryInputs(): void {
    if (!this.companyExperience) {
      throw new Error('Missing company experience in Company Section Component');
    }
  }
}
