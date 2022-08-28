import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Item } from '../models/items/item';
import { ItemAttribute } from '../models/items/item-attribute';
import { ItemCategory } from '../models/items/item-category';
import { ItemFlingEffect } from '../models/items/item-fling-effect';
import { ItemPocket } from '../models/items/item-pocket';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) {}

  getItem(identifier: string | number): Observable<Item> {
    return this.http.get<Item>(`${Endpoints.BaseUrl}${Endpoints.Item}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getItemAttributes(identifier: string | number): Observable<ItemAttribute> {
    return this.http.get<ItemAttribute>(`${Endpoints.BaseUrl}${Endpoints.ItemAttribute}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getItemCategories(identifier: string | number): Observable<ItemCategory> {
    return this.http.get<ItemCategory>(`${Endpoints.BaseUrl}${Endpoints.ItemCategory}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getItemFlingEffects(identifier: string | number): Observable<ItemFlingEffect> {
    return this.http.get<ItemFlingEffect>(`${Endpoints.BaseUrl}${Endpoints.ItemFlingEffect}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getItemPockets(identifier: string | number): Observable<ItemPocket> {
    return this.http.get<ItemPocket>(`${Endpoints.BaseUrl}${Endpoints.ItemPocket}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

}
