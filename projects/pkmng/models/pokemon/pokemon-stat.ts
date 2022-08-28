import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};
