import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { EncounterMethodRate } from './encounter-method-rate';
import { PokemonEncounter } from './pokemon-encounter';

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: Array<EncounterMethodRate>;
  location: NamedAPIResource;
  names: Array<Name>;
  pokemon_encounters: Array<PokemonEncounter>;
};
