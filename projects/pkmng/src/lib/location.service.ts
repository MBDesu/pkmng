import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Location } from '../models/locations/location';
import { LocationArea } from '../models/locations/location-area';
import { PalParkArea } from '../models/locations/pal-park-area';
import { Region } from '../models/locations/region';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}

  getLocations(identifier: string | number): Observable<Location> {
    return this.http.get<Location>(`${Endpoints.BaseUrl}${Endpoints.Location}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getLocationAreas(identifier: string | number): Observable<LocationArea> {
    return this.http.get<LocationArea>(`${Endpoints.BaseUrl}${Endpoints.LocationArea}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPalParkAreas(identifier: string | number): Observable<PalParkArea> {
    return this.http.get<PalParkArea>(`${Endpoints.BaseUrl}${Endpoints.PalParkArea}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getRegions(identifier: string | number): Observable<Region> {
    return this.http.get<Region>(`${Endpoints.BaseUrl}${Endpoints.Region}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
