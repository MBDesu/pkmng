import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Machine } from '../models/machines/machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) {}

  getMachines(id: number): Observable<Machine> {
    return this.http.get<Machine>(`${Endpoints.BaseUrl}${Endpoints.Machine}/${id}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
