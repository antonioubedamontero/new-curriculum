import { TestBed } from '@angular/core/testing';

import { IndentificationService } from './indentification.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';

describe('IndentificationService', () => {
  let service: IndentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslateServiceMock,
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(IndentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data when getIdentificationMethod is called', () => {
    expect(service.getIdentification()).toBeTruthy();
  })
});
