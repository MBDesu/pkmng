import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
};
