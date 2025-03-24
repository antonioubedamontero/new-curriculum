import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

import { MaterialModule } from '../../../base/material/material.module';

import { MainComponent } from './main.component';
import { MainMockService } from '../../../mocks/services/main-mock.service';
import { MainService } from '../../../service';
import { MocksModule } from '../../../mocks/mocks.module';
import { TranslateServiceMock } from '../../../mocks/services/translate-mock.service';
import { WorkExperienceItemResponse } from '../../../interfaces';

@Component({
  selector: 'app-company-section',
  standalone: false,
  template: '<p>company-section</p>',
})
export class CompanySectionMockComponent {
  @Input() companyExperience!: WorkExperienceItemResponse;
}

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  let getSummarySpy: any;
  let getHabilitiesSpy: any;
  let getTrainingsSpy: any;
  let getLanguagesSpy: any;
  let getDeveloperExperiencesSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        CompanySectionMockComponent
      ],
      imports: [
        MaterialModule,
        MocksModule
      ],
      providers: [
        provideHttpClient(),  // Configure HttpClient when using with modules
        provideHttpClientTesting,
        TranslateServiceMock,
        {
          provide: MainService,
          useClass: MainMockService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;

    getSummarySpy = spyOn(component, 'getSummaryFromServer').and.callThrough();
    getHabilitiesSpy = spyOn(component, 'getHabilitiesFromServer').and.callThrough();
    getTrainingsSpy = spyOn(component, 'getTrainingsFromServer').and.callThrough();
    getLanguagesSpy = spyOn(component, 'getLanguagesFromServer').and.callThrough();
    getDeveloperExperiencesSpy = spyOn(component, 'getDeveloperExperiencesFromServer').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('- should call this endpoints:', () => {
    it('get summary', () => {
      expect(getSummarySpy).toHaveBeenCalled();
    });

    it('get habilities', () => {
      expect(getHabilitiesSpy).toHaveBeenCalled();
    });

    it('get trainings', () => {
      expect(getTrainingsSpy).toHaveBeenCalled();
    });

    it('get languages', () => {
      expect(getLanguagesSpy).toHaveBeenCalled();
    });

    it('get developer experiences', () => {
      expect(getDeveloperExperiencesSpy).toHaveBeenCalled();
    });
  });

  describe('- should have these sections:', () => {
    it('summary section', () => {
      const summarySection = fixture.debugElement.nativeElement.querySelector('.summary-section');
      expect(summarySection).toBeTruthy();
    });

    it('habilities section', () => {
      const habilitiesSection = fixture.debugElement.nativeElement.querySelector('.habilities-section');
      expect(habilitiesSection).toBeTruthy();
    });

    it('training section', () => {
      const trainingSection = fixture.debugElement.nativeElement.querySelector('.training-section');
      expect(trainingSection).toBeTruthy();
    });

    it('work experience section', () => {
      const workExperienceSection = fixture.debugElement.nativeElement.querySelector('.work-experience-section');
      expect(workExperienceSection).toBeTruthy();
    });

    it('developer experience section', () => {
      const developerExperienceSection = fixture.debugElement.nativeElement.querySelector('.developer-experience');
      expect(developerExperienceSection).toBeTruthy();
    });

    it('languages section', () => {
      const languagesSection = fixture.debugElement.nativeElement.querySelector('.languages-section');
      expect(languagesSection).toBeTruthy();
    });

    it('developerExperiencesSections should give an empty array when developerExperiences doesn\'t exists', () => {
      (component.developerExperiences as any) = null;
      expect(component.developerExperiencesSections).toEqual([]);
    });
  });
});
