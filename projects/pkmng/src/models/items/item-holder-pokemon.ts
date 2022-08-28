import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface ItemHolderPokemon {
  pokemon: NamedAPIResource;
  version_details: Array<ItemHolderPokemon>;
};
