import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { IdentificationResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class IndentificationService {
  private readonly baseUrl = environment.apiUrl;
  private language: string;

  constructor(private http: HttpClient) {
    this.language = localStorage.getItem('language') || 'es';
  }


  getIdentification(): Observable<IdentificationResponse> {
    const identificationUrl = this.language === 'es' ? environment.identificationApiEsUrl : environment.identificationApiEnUrl;
    return this.http.get<IdentificationResponse>(`${this.baseUrl}/${identificationUrl}`);
  }
}
