import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceItemComponent } from './experience-item.component';
import { projectItemResponseWithProjectAndRangesMock } from '../../../../../mocks/data/main-response-mock';
import { MaterialModule } from '../../../../../base/material/material.module';

describe('ExperienceItemComponent', () => {
  let component: ExperienceItemComponent;
  let fixture: ComponentFixture<ExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceItemComponent
      ],
      imports: [
        MaterialModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceItemComponent);
    component = fixture.componentInstance;

    component.companyProject = projectItemResponseWithProjectAndRangesMock;
    component.isRenderTitle = true;

    component.ngOnInit();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should throw an error if mandatory inputs are not present', () => {
    const errorText = 'Missing project item response in ExperienceItemComponent.';
    expect(() => {
        (component.companyProject as any) = null;
        component.isRenderTitle = false;
        component['validateMandatoryFields']();
    }).toThrowError(errorText);
  });

  it('should render experience item icon', () => {
    const htmlExperienceItemIcon: HTMLElement = fixture.debugElement.nativeElement.querySelector('.experience-item-icon');
    expect(htmlExperienceItemIcon).toBeTruthy();
  });

  it('should render experience item project name', () => {
    const htmlExperienceItemProjectName: HTMLElement = fixture.debugElement.nativeElement.querySelector('.experience-item-project-name');
    expect(htmlExperienceItemProjectName).toBeTruthy();
  });

  it('should render experience item description', () => {
    const htmlExperienceItemDescription: HTMLElement = fixture.debugElement.nativeElement.querySelector('.company-item-project-description');
    expect(htmlExperienceItemDescription).toBeTruthy();
  });
});
