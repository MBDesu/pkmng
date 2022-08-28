import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { EncounterCondition } from '../models/encounters/encounter-condition';
import { EncounterConditionValue } from '../models/encounters/encounter-condition-value';
import { EncounterMethod } from '../models/encounters/encounter-method';

@Injectable({
  providedIn: 'root'
})
export class EncounterService {

  constructor(private http: HttpClient) {}

  getEncounterMethods(identifier: string | number): Observable<EncounterMethod> {
    return this.http.get<EncounterMethod>(`${Endpoints.BaseUrl}${Endpoints.EncounterMethod}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getEncounterConditions(identifier: string | number): Observable<EncounterCondition> {
    return this.http.get<EncounterCondition>(`${Endpoints.BaseUrl}${Endpoints.EncounterCondition}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getEncounterConditionValues(identifier: string | number): Observable<EncounterConditionValue> {
    return this.http.get<EncounterConditionValue>(`${Endpoints.BaseUrl}${Endpoints.EncounterConditionValue}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
