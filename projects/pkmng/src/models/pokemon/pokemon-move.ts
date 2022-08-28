import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonMoveVersion } from './pokemon-move-version';

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: Array<PokemonMoveVersion>;
};
