import { TestBed } from '@angular/core/testing';

import { MainService } from '.';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';
import { TranslateService } from '@ngx-translate/core';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should retrieve data when request data from endpoints', () =>{
    it('should retrieve data when call to get habilities endpoint', () => {
      service['translationService'].currentLanguage = 'es';
      expect(service.getHabilities()).toBeTruthy();
      service['translationService'].currentLanguage = 'en';
      expect(service.getHabilities()).toBeTruthy();
    });

    it('should retrieve data when call to get languages endpoint', () => {
      service['translationService'].currentLanguage = 'es';
      expect(service.getLanguages()).toBeTruthy();
      service['translationService'].currentLanguage = 'en';
      expect(service.getLanguages()).toBeTruthy();
    });

    it('should retrieve data when call to get practice developer work experiences endpoint', () => {
      service['translationService'].currentLanguage = 'es';
      expect(service.getDeveloperWorkExperiences()).toBeTruthy();
      service['translationService'].currentLanguage = 'en';
      expect(service.getDeveloperWorkExperiences()).toBeTruthy();
    });

    it('should retrieve data when call to get summary endpoint', () => {
      service['translationService'].currentLanguage = 'es';
      expect(service.getSummary()).toBeTruthy();
      service['translationService'].currentLanguage = 'en';
      expect(service.getSummary()).toBeTruthy();
    });

    it('should retrieve data when call to get trainings endpoint', () => {
      service['translationService'].currentLanguage = 'es';
      expect(service.getTrainings()).toBeTruthy();
      service['translationService'].currentLanguage = 'en';
      expect(service.getTrainings()).toBeTruthy();
    });
  });
});
