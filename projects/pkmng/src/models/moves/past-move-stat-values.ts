import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VerboseEffect } from '../utility/common/verbose-effect';

export interface PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: Array<VerboseEffect>;
  type: NamedAPIResource;
  version_group: NamedAPIResource;
};
