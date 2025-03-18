import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabilitiesResponse, SummaryResponse, TrainingsResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private readonly baseUrl = environment.apiUrl;
  private language: string;

  constructor(private http: HttpClient) {
    this.language = localStorage.getItem('language') || 'es';
  }

  getSummary(): Observable<SummaryResponse> {
      const summaryUrl = this.language === 'es' ? environment.summaryApiEsUrl : environment.summaryApiEnUrl;
      return this.http.get<SummaryResponse>(`${this.baseUrl}/${summaryUrl}`);
  }

  getHabilities(): Observable<HabilitiesResponse> {
    const habilitiesUrl = this.language === 'es' ? environment.habilitiesApiEsUrl : environment.habilitiesApiEnUrl;
    return this.http.get<HabilitiesResponse>(`${this.baseUrl}/${habilitiesUrl}`);
  }

  getTrainings(): Observable<TrainingsResponse> {
    const trainingsUrl = this.language === 'es' ? environment.trainingsApiEsUrl : environment.trainingsApiEnUrl;
    return this.http.get<TrainingsResponse>(`${this.baseUrl}/${trainingsUrl}`);
  }
}
