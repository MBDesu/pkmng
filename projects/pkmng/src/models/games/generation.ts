import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface Generation {
  id: number;
  name: string;
  abilities: Array<NamedAPIResource>;
  names: Array<Name>;
  main_region: NamedAPIResource;
  moves: Array<NamedAPIResource>;
  pokemon_species: Array<NamedAPIResource>;
  types: Array<NamedAPIResource>;
  version_groups: Array<NamedAPIResource>;
};
