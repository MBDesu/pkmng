import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Berry } from '../models/berries/berry';
import { BerryFirmness } from '../models/berries/berry-firmness';
import { BerryFlavor } from '../models/berries/berry-flavor';

@Injectable({
  providedIn: 'root'
})
export class BerryService {

  constructor(private http: HttpClient) {}

  getBerry(identifier: string | number): Observable<Berry> {
    return this.http.get<Berry>(`${Endpoints.BaseUrl}${Endpoints.Berry}/${identifier.toString().toLowerCase()}`,  {
      context: withCache(CACHE_CONFIG)
    });
  }

  getBerryFirmness(identifier: string | number): Observable<BerryFirmness> {
    return this.http.get<BerryFirmness>(`${Endpoints.BaseUrl}${Endpoints.BerryFirmness}/${identifier.toString().toLowerCase()}`,  {
      context: withCache(CACHE_CONFIG)
    });
  }

  getBerryFlavor(identifier: string | number): Observable<BerryFlavor> {
    return this.http.get<BerryFlavor>(`${Endpoints.BaseUrl}${Endpoints.BerryFlavor}/${identifier.toString().toLowerCase()}`,  {
      context: withCache(CACHE_CONFIG)
    });
  }

}
