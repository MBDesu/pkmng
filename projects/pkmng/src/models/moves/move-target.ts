import { Description } from '../utility/common/description';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface MoveTarget {
  id: number;
  name: string;
  descriptions: Array<Description>;
  moves: Array<NamedAPIResource>;
  names: Array<Name>;
};
