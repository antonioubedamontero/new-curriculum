import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { CompanyProjectsComponent } from './company-projects.component';
import { ProjectItemResponse } from '../../../../interfaces';
import { projectItemResponseWithProjectAndRangesMock } from '../../../../mocks/data/main-response-mock';

@Component({
  selector: 'app-experience-item',
  standalone: false,
  template: '<p>Experience item</p>'
})
export class ExperienceItemMockComponent {
  @Input() companyProject!: ProjectItemResponse;
  @Input() isRenderTitle? = false;
}

describe('CompanyProjectsComponent', () => {
  let component: CompanyProjectsComponent;
  let fixture: ComponentFixture<CompanyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompanyProjectsComponent,
        ExperienceItemMockComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one project experience component when there is only one work experience for that company', () => {
    component.companyProjects = [
      projectItemResponseWithProjectAndRangesMock
    ];
    fixture.detectChanges();

    const htmlCompanyProjects: HTMLCollection = fixture.debugElement.nativeElement.querySelectorAll('app-experience-item');
    expect(htmlCompanyProjects.length).toBe(1);
  });

  it('should render many projects experience components when there is many work experience for that company', () => {
    component.companyProjects = [
      projectItemResponseWithProjectAndRangesMock,
      projectItemResponseWithProjectAndRangesMock
    ];
    fixture.detectChanges();
    const htmlCompanyProjects: HTMLCollection = fixture.debugElement.nativeElement.querySelectorAll('app-experience-item');
    expect(htmlCompanyProjects.length).toBeGreaterThan(1);
  });
});
