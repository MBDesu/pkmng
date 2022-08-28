import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Generation } from '../models/games/generation';
import { Pokedex } from '../models/games/pokedex';
import { Version } from '../models/games/version';
import { VersionGroup } from '../models/games/version-group';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {}

  getGenerations(identifier: string | number): Observable<Generation> {
    return this.http.get<Generation>(`${Endpoints.BaseUrl}${Endpoints.Generation}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokedexes(identifier: string | number): Observable<Pokedex> {
    return this.http.get<Pokedex>(`${Endpoints.BaseUrl}${Endpoints.Pokedex}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getVersion(identifier: string | number): Observable<Version> {
    return this.http.get<Version>(`${Endpoints.BaseUrl}${Endpoints.Version}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getVersionGroups(identifier: string | number): Observable<VersionGroup> {
    return this.http.get<VersionGroup>(`${Endpoints.BaseUrl}${Endpoints.VersionGroup}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
