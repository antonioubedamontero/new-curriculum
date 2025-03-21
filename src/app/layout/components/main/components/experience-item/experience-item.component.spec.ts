import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceItemComponent } from './experience-item.component';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExperienceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;

    component.companyProject = {
      company: 'company',
    	rangeDates: 'date1-date2',
	    description: 'description'
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
