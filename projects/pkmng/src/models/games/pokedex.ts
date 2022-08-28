import { Description } from '../utility/common/description';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonEntry } from './pokemon-entry';

export interface Pokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: Array<Description>;
  names: Array<Name>;
  pokemon_entries: Array<PokemonEntry>;
  region: NamedAPIResource;
  version_groups: Array<NamedAPIResource>;
};
