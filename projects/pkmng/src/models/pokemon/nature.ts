import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { MoveBattleStylePreference } from './move-battle-style-preference';
import { NatureStatChange } from './nature-stat-change';

export interface Nature {
  id: number;
  name: string;
  decreased_stat: NamedAPIResource;
  increased_stat: NamedAPIResource;
  hates_flavor: NamedAPIResource;
  likes_flavor: NamedAPIResource;
  pokeathlon_stat_changes: Array<NatureStatChange>;
  move_battle_style_preferences: Array<MoveBattleStylePreference>;
  names: Array<Name>;
};
