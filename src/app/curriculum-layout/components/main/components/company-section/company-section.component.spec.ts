import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySectionComponent } from './company-section.component';
import { MaterialModule } from '../../../../../base/material/material.module';
import { Component, Input } from '@angular/core';
import { ProjectItemResponse } from '../../../../../interfaces';
import { workExperienceItemResponseMock1 } from '../../../../../mocks/data/main-response-mock';

@Component({
  selector: 'app-company-projects',
  standalone: false,
  template: '<p>company-projects</p>',
})
export class CompanyProjetsComponentMock{
  @Input() companyProjects: ProjectItemResponse[] = [];
}

describe('CompanySectionComponent', () => {
  let component: CompanySectionComponent;
  let fixture: ComponentFixture<CompanySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CompanySectionComponent,
        CompanyProjetsComponentMock
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySectionComponent);
    component = fixture.componentInstance;

    component.companyExperience = workExperienceItemResponseMock1;

    component.ngOnChanges();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a component projects component', () => {
    const htmlComponentProjects = fixture.debugElement.nativeElement.querySelector('app-company-projects');
    expect(htmlComponentProjects).toBeTruthy();
  });

  it('should render company title and icon', () => {
    const htmlCompanyIcon: HTMLElement = fixture.debugElement.nativeElement.querySelector('.company-icon');
    expect(htmlCompanyIcon).toBeTruthy();
    expect(htmlCompanyIcon.innerHTML).toBeTruthy();

    const htmlCompanyTitle: HTMLElement = fixture.debugElement.nativeElement.querySelector('.company-title');
    expect(htmlCompanyTitle).toBeTruthy();
    expect(htmlCompanyTitle.innerHTML).toBeTruthy();
  })

  it('should thrown and error if input data is not present', () => {
    const errorText = 'Missing company experience in Company Section Component';
    expect(() => {
      (component.companyExperience as unknown) = null;
      component['checkMandatoryInputs']();
    }).toThrowError(errorText);
  });
});
