import { FlavorText } from '../utility/common/flavor-text';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: Array<FlavorText>;
  moves: Array<NamedAPIResource>;
};
