import { TestBed } from '@angular/core/testing';

import { MainService } from '.';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslateServiceMock,
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
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getHabilities()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getHabilities()).toBeTruthy();
    });

    it('should retrieve data when call to get languages endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getLanguages()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getLanguages()).toBeTruthy();
    });

    it('should retrieve data when call to get practice developer work experiences endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getDeveloperWorkExperiences()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getDeveloperWorkExperiences()).toBeTruthy();
    });

    it('should retrieve data when call to get summary endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getSummary()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getSummary()).toBeTruthy();
    });

    it('should retrieve data when call to get trainings endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getTrainings()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getTrainings()).toBeTruthy();
    });
  });
});
