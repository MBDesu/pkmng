import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { withCache } from '@ngneat/cashew';
import { Endpoints } from 'pkmng/constants';
import { Pokemon } from '../models/pokemon/pokemon';
import { Ability } from '../models/pokemon/ability';
import { Observable } from 'rxjs';
import { CACHE_CONFIG } from '../config/cache-config';
import { Characteristic } from '../models/pokemon/characteristic';
import { EggGroup } from '../models/pokemon/egg-group';
import { Gender } from '../models/pokemon/gender';
import { GrowthRate } from '../models/pokemon/growth-rate';
import { Nature } from '../models/pokemon/nature';
import { PokeathlonStat } from '../models/pokemon/pokeathlon-stat';
import { LocationAreaEncounter } from '../models/pokemon/location-area-encounter';
import { PokemonColor } from '../models/pokemon/pokemon-color';
import { PokemonForm } from '../models/pokemon/pokemon-form';
import { PokemonHabitat } from '../models/pokemon/pokemon-habitat';
import { PokemonShape } from '../models/pokemon/pokemon-shape';
import { PokemonSpecies } from '../models/pokemon/pokemon-species';
import { Stat } from '../models/pokemon/stat';
import { Type } from '../models/pokemon/type';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  // TODO refactor everything here
  // update: I'm not sure what the above line references
  getAbility(identifier: string | number): Observable<Ability> {
    return this.http.get<Ability>(`${Endpoints.BaseUrl}${Endpoints.Ability}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getCharacteristicById(id: number): Observable<Characteristic> {
    return this.http.get<Characteristic>(`${Endpoints.BaseUrl}${Endpoints.Characteristic}/${id}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getEggGroup(identifier: string | number): Observable<EggGroup> {
    return this.http.get<EggGroup>(`${Endpoints.BaseUrl}${Endpoints.EggGroup}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getGender(identifier: string | number): Observable<Gender> {
    return this.http.get<Gender>(`${Endpoints.BaseUrl}${Endpoints.Gender}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getGrowthRate(identifier: string | number): Observable<GrowthRate> {
    return this.http.get<GrowthRate>(`${Endpoints.BaseUrl}${Endpoints.GrowthRate}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getNature(identifier: string | number): Observable<Nature> {
    return this.http.get<Nature>(`${Endpoints.BaseUrl}${Endpoints.Nature}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokeathlonStat(identifier: string | number): Observable<PokeathlonStat> {
    return this.http.get<PokeathlonStat>(`${Endpoints.BaseUrl}${Endpoints.PokeathlonStat}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }
  
  getPokemon(identifier: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${Endpoints.BaseUrl}${Endpoints.Pokemon}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonLocationAreas(identifier: string | number): Observable<Array<LocationAreaEncounter>> {
    return this.http.get<Array<LocationAreaEncounter>>(`${Endpoints.BaseUrl}${Endpoints.PokemonLocationArea.replace(':id', identifier.toString().toLowerCase())}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonColors(identifier: string | number): Observable<PokemonColor> {
    return this.http.get<PokemonColor>(`${Endpoints.BaseUrl}${Endpoints.PokemonColor}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonForm(identifier: string | number): Observable<PokemonForm> {
    return this.http.get<PokemonForm>(`${Endpoints.BaseUrl}${Endpoints.PokemonForm}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonHabitat(identifier: string | number): Observable<PokemonHabitat> {
    return this.http.get<PokemonHabitat>(`${Endpoints.BaseUrl}${Endpoints.PokemonHabitat}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonShape(identifier: string | number): Observable<PokemonShape> {
    return this.http.get<PokemonShape>(`${Endpoints.BaseUrl}${Endpoints.PokemonShape}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getPokemonSpecies(identifier: string | number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${Endpoints.BaseUrl}${Endpoints.PokemonSpecies}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getStat(identifier: string | number): Observable<Stat> {
    return this.http.get<Stat>(`${Endpoints.BaseUrl}${Endpoints.Stat}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }

  getType(identifier: string | number): Observable<Type> {
    return this.http.get<Type>(`${Endpoints.BaseUrl}${Endpoints.Type}/${identifier.toString().toLowerCase()}`, {
      context: withCache(CACHE_CONFIG)
    });
  }
  
}
