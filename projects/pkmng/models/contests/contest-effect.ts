import { Effect } from '../utility/common/effect';
import { FlavorText } from '../utility/common/flavor-text';

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: Array<Effect>;
  flavor_text_entries: Array<FlavorText>;
};
