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

    // spyOn(service, 'getHabilities').and.callThrough();
    // spyOn(service, 'getLanguages').and.callThrough();
    // spyOn(service, 'getPracticeDeveloperWorkExperiences').and.callThrough;
    // spyOn(service, 'getSummary').and.callThrough();
    // spyOn(service, 'getTrainings').and.callThrough();
    // spyOn(service, 'getCobolDeveloperWorkExperiences').and.callThrough();
    // spyOn(service, 'getWebDeveloperWorkExperiences').and.callThrough();
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
      expect(service.getPracticeDeveloperWorkExperiences()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getPracticeDeveloperWorkExperiences()).toBeTruthy();
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

    it('should retrieve data when call to get Cobol developer experience endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getCobolDeveloperWorkExperiences()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getCobolDeveloperWorkExperiences()).toBeTruthy();
    });

    it('should retrieve data when call to get Web developer experience endpoint', () => {
      service.language = 'es'; // Cambia el idioma antes de la llamada
      expect(service.getWebDeveloperWorkExperiences()).toBeTruthy();

      service.language = 'en'; // Cambia el idioma antes de la llamada
      expect(service.getWebDeveloperWorkExperiences()).toBeTruthy();
    });
  });
});
