import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Move } from '../models/moves/move';
import { MoveAilment } from '../models/moves/move-ailment';
import { MoveCategory } from '../models/moves/move-category';
import { MoveDamageClass } from '../models/moves/move-damage-class';
import { MoveLearnMethod } from '../models/moves/move-learn-method';
import { MoveTarget } from '../models/moves/move-target';

@Injectable({
  providedIn: 'root'
})
export class MoveService {

  constructor(private http: HttpClient) {}

  getMoves(identifier: string | number): Observable<Move> {
    return this.http.get<Move>(`${Endpoints.BaseUrl}${Endpoints.Move}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getMoveAilments(identifier: string | number): Observable<MoveAilment> {
    return this.http.get<MoveAilment>(`${Endpoints.BaseUrl}${Endpoints.MoveAilment}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getMoveCategories(identifier: string | number): Observable<MoveCategory> {
    return this.http.get<MoveCategory>(`${Endpoints.BaseUrl}${Endpoints.MoveCategory}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getMoveDamageClasses(identifier: string | number): Observable<MoveDamageClass> {
    return this.http.get<MoveDamageClass>(`${Endpoints.BaseUrl}${Endpoints.MoveDamageClass}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getMoveLearnMethods(identifier: string | number): Observable<MoveLearnMethod> {
    return this.http.get<MoveLearnMethod>(`${Endpoints.BaseUrl}${Endpoints.MoveLearnMethod}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getMoveTargets(identifier: string | number): Observable<MoveTarget> {
    return this.http.get<MoveTarget>(`${Endpoints.BaseUrl}${Endpoints.MoveTarget}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
