import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Language } from '../models/utility/language';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) {}

  getLanguage(identifier: string | number): Observable<Language> {
    return this.http.get<Language>(`${Endpoints.BaseUrl}${Endpoints.Language}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
