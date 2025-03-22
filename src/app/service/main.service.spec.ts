import { TestBed } from '@angular/core/testing';

import { combineLatest, defer, of } from 'rxjs';

import { MainService } from '.';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';
import { habilitiesResponseMock, languagesResponseMock, summaryResponseMock, trainingsResponseMock, workExperiencesResponseMock } from '../mocks/data/main-response-mock';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        // provideHttpClient(withFetch())  // Configure HttpClient when using with modules
        TranslateServiceMock,
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(MainService);

    spyOn(service, 'getHabilities').and.returnValue(of(habilitiesResponseMock));
    spyOn(service, 'getLanguages').and.returnValue(of(languagesResponseMock));
    spyOn(service, 'getPracticeDeveloperWorkExperiences').and.returnValue(of(workExperiencesResponseMock));
    spyOn(service, 'getSummary').and.returnValue(of(summaryResponseMock));
    spyOn(service, 'getTrainings').and.returnValue(of(trainingsResponseMock));
    spyOn(service, 'getCobolDeveloperWorkExperiences').and.returnValue(of(workExperiencesResponseMock));
    spyOn(service, 'getWebDeveloperWorkExperiences').and.returnValue(of(workExperiencesResponseMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should retrieve data when request data from endpoints', () =>{
    it('should retrieve data when call to get habilities endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getHabilities();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getHabilities();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get languages endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getLanguages();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getLanguages();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get practice developer work experiences endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getPracticeDeveloperWorkExperiences();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getPracticeDeveloperWorkExperiences();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get summary endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getSummary();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getSummary();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get trainings endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getTrainings();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getTrainings();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get Cobol developer experience endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getCobolDeveloperWorkExperiences();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getCobolDeveloperWorkExperiences();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });

    it('should retrieve data when call to get Web developer experience endpoint', (done) => {
      const observableEs = defer(() => {
          service.language = 'es'; // Cambia el idioma antes de la llamada
          return service.getWebDeveloperWorkExperiences();
      });

      const observableEn = defer(() => {
        service.language = 'en'; // Cambia el idioma antes de la llamada
        return service.getWebDeveloperWorkExperiences();
      });

      combineLatest([observableEs, observableEn]).subscribe(observableResponses => {
        for (const observableResponse of observableResponses) {
          expect(observableResponse).toBeTruthy();
        }
        done();
      })
    });
  });
});
