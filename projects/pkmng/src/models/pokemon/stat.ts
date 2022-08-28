import { APIResource } from '../utility/common/api-resource';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { MoveStatAffectSets } from './move-stat-affect-sets';
import { NatureStatAffectSets } from './nature-stat-affect-sets';

export interface Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: APIResource;
  move_damage_class: NamedAPIResource;
  names: Array<Name>;
};
