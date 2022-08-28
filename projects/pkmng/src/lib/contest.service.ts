import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { ContestEffect } from '../models/contests/contest-effect';
import { ContestType } from '../models/contests/contest-type';
import { SuperContestEffect } from '../models/contests/super-contest-effect';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private http: HttpClient) {}

  getContestType(identifier: string | number): Observable<ContestType> {
    return this.http.get<ContestType>(`${Endpoints.BaseUrl}${Endpoints.ContestType}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getContestEffect(id: number): Observable<ContestEffect> {
    return this.http.get<ContestEffect>(`${Endpoints.BaseUrl}${Endpoints.ContestEffect}/${id}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getSuperContestEffect(id: number): Observable<SuperContestEffect> {
    return this.http.get<SuperContestEffect>(`${Endpoints.BaseUrl}${Endpoints.SuperContestEffect}/${id}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
