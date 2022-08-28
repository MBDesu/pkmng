import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface Region {
  id: number;
  locations: Array<NamedAPIResource>;
  name: string;
  names: Array<Name>;
  main_generation: NamedAPIResource;
  pokedexes: Array<NamedAPIResource>;
  version_groups: Array<NamedAPIResource>;
};
