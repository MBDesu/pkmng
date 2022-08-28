import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Array<Name>;
  pokemon_species: Array<NamedAPIResource>;
};
