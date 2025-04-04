import { TestBed } from '@angular/core/testing';

import { TranslationService } from './translation.service';
import { TranslateServiceMock } from '../mocks/services/translate-mock.service';
import { TranslateService } from '@ngx-translate/core';

describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useClass: TranslateServiceMock
        }
      ]
    });
    service = TestBed.inject(TranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
