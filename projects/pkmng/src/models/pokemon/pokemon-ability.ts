import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};
