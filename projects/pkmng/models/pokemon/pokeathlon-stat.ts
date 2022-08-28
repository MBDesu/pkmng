import { Name } from '../utility/common/name';
import { NaturePokeathlonStatAffectSets } from './nature-pokeathlon-stat-affect-sets';

export interface PokeathlonStat {
  id: number;
  name: string;
  names: Array<Name>;
  affecting_natures: NaturePokeathlonStatAffectSets;
};
