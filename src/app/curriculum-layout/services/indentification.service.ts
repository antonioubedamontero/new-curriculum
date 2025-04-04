import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IdentificationResponse } from '../interfaces';
import { TranslationService } from './translation.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndentificationService {
  private readonly baseUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly translationService: TranslationService
  ) {}

  getIdentification(): Observable<IdentificationResponse> {
    const identificationUrl = this.translationService.currentLanguage === 'es' ? environment.identificationApiEsUrl : environment.identificationApiEnUrl;
    return this.http.get<IdentificationResponse>(`${this.baseUrl}/${identificationUrl}`);
  }
}
