import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonHeldItemVersion } from './pokemon-held-item-version';

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: Array<PokemonHeldItemVersion>;
};
