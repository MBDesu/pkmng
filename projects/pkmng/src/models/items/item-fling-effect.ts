import { Effect } from '../utility/common/effect';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Array<Effect>;
  items: Array<NamedAPIResource>;
};
