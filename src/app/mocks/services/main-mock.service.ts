import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HabilitiesResponse, LanguagesResponse, SummaryResponse, TrainingsResponse, WorkExperiencesResponse } from '../../interfaces';
import { habilitiesResponseMock, languagesResponseMock, summaryResponseMock, trainingsResponseMock, workExperiencesResponseMock } from '../data/main-response-mock';

@Injectable({
  providedIn: 'root'
})
export class MainMockService {

    getSummary(): Observable<SummaryResponse> {
      return of(summaryResponseMock);
    }

    getHabilities(): Observable<HabilitiesResponse> {
      return of(habilitiesResponseMock);
    }

    getTrainings(): Observable<TrainingsResponse> {
      return of(trainingsResponseMock);
    }

    getLanguages(): Observable<LanguagesResponse> {
      return of(languagesResponseMock);
    }

    getWebDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
      return of(workExperiencesResponseMock);
    }

    getCobolDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
      return of(workExperiencesResponseMock);
    }

    getPracticeDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
      return of(workExperiencesResponseMock);
    }
}
