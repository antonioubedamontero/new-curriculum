import { Component, Input, OnInit } from '@angular/core';

import { ProjectItemResponse } from '../../../../../interfaces';

@Component({
  selector: 'app-experience-item',
  standalone: false,
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.scss'
})
export class ExperienceItemComponent implements OnInit{
  @Input() companyProject!: ProjectItemResponse;
  @Input() isRenderTitle? = false;

  ngOnInit(): void {
    if (!this.companyProject) {
      throw new Error('Missing project item response in ExperienceItemComponent.');
    }
  }

  get renderTitle(): boolean {
    return !!this.companyProject.rangeDates && !!this.companyProject.company && !!this.isRenderTitle;
  }
}
