import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { HabilitiesResponse, LanguagesResponse, SummaryResponse, TrainingsResponse, WorkExperiencesResponse } from '../interfaces';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class MainService{
  private readonly baseUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly translationService: TranslationService) {}

  getSummary(): Observable<SummaryResponse> {
      const summaryUrl = this.translationService.currentLanguage === 'es' ? environment.summaryApiEsUrl : environment.summaryApiEnUrl;
      return this.http.get<SummaryResponse>(`${this.baseUrl}/${summaryUrl}`);
  }

  getHabilities(): Observable<HabilitiesResponse> {
    const habilitiesUrl = this.translationService.currentLanguage === 'es' ? environment.habilitiesApiEsUrl : environment.habilitiesApiEnUrl;
    return this.http.get<HabilitiesResponse>(`${this.baseUrl}/${habilitiesUrl}`);
  }

  getTrainings(): Observable<TrainingsResponse> {
    const trainingsUrl = this.translationService.currentLanguage === 'es' ? environment.trainingsApiEsUrl : environment.trainingsApiEnUrl;
    return this.http.get<TrainingsResponse>(`${this.baseUrl}/${trainingsUrl}`);
  }

  getLanguages(): Observable<LanguagesResponse> {
    const languagesUrl = this.translationService.currentLanguage === 'es' ? environment.languagesApiEsUrl : environment.languagesApiEnUrl;
    return this.http.get<LanguagesResponse>(`${this.baseUrl}/${languagesUrl}`);
  }

  getDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
    const developerWorkExperiencesUrl = this.translationService.currentLanguage === 'es' ? environment.workExperiencesEsUrl : environment.workExperiencesEnUrl;
    return this.http.get<WorkExperiencesResponse>(`${this.baseUrl}/${developerWorkExperiencesUrl}`);
  }
}
