import { Component, Input } from '@angular/core';
import { ProjectItemResponse } from '../../../../interfaces';

@Component({
  selector: 'app-company-projects',
  standalone: false,
  templateUrl: './company-projects.component.html',
  styleUrl: './company-projects.component.scss'
})
export class CompanyProjectsComponent {
  @Input() companyProjects: ProjectItemResponse[] = [];

  constructor() {}

  get firstProject(): ProjectItemResponse {
    return this.companyProjects[0];
  }
}
