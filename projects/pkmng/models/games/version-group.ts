import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: NamedAPIResource;
  move_learn_methods: Array<NamedAPIResource>;
  pokedexes: Array<NamedAPIResource>;
  regions: Array<NamedAPIResource>;
  versions: Array<NamedAPIResource>;
};
