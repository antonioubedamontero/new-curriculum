import { Component, Input, OnInit } from '@angular/core';
import { ProjectItemResponse } from '../../../../../interfaces';

@Component({
  selector: 'app-company-projects',
  standalone: false,
  templateUrl: './company-projects.component.html',
  styleUrl: './company-projects.component.scss'
})
export class CompanyProjectsComponent implements OnInit {
  @Input() companyProjects: ProjectItemResponse[] = [];

  constructor() {}

  ngOnInit(): void {
  }

  get firstProject(): ProjectItemResponse {
    return this.companyProjects[0];
  }
}
