import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonType } from './pokemon-type';

export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: Array<PokemonType>;
};
