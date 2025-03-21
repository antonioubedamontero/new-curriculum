import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySectionComponent } from './company-section.component';
import { MaterialModule } from '../../../../../base/material/material.module';
import { Component, Input } from '@angular/core';
import { ProjectItemResponse } from '../../../../../interfaces';

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
      imports: [MaterialModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanySectionComponent);
    component = fixture.componentInstance;

    component.companyExperience = {
      company: 'company',
	    rangeDates: 'date1-date2',
	    projects: [
        {
          company: 'client1',
	        rangeDates: 'date1-date2',
	        description: 'project1'
        },
        {
          company: 'client2',
	        rangeDates: 'date1-date2',
	        description: 'project2'
        }
      ]
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
