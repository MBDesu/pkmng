import { Effect } from '../utility/common/effect';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface AbilityEffectChange {
  effect_entries: Array<Effect>;
  version_group: NamedAPIResource;
};
