import { TestBed } from '@angular/core/testing';

import { IndentificationService } from './indentification.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';
import { TranslateService } from '@ngx-translate/core';

describe('IndentificationService', () => {
  let service: IndentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
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
