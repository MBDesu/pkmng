import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { EvolutionChain } from '../models/evolution/evolution-chain';
import { EvolutionTrigger } from '../models/evolution/evolution-trigger';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {

  constructor(private http: HttpClient) {}

  getEvolutionChains(id: number): Observable<EvolutionChain> {
    return this.http.get<EvolutionChain>(`${Endpoints.BaseUrl}${Endpoints.EvolutionChain}/${id}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getEvolutionTriggers(identifier: string | number): Observable<EvolutionTrigger> {
    return this.http.get<EvolutionTrigger>(`${Endpoints.BaseUrl}${Endpoints.EvolutionTrigger}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
