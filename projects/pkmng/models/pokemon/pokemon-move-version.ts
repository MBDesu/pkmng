import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};
