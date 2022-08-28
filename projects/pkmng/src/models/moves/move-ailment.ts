import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface MoveAilment {
  id: number;
  name: string;
  moves: Array<NamedAPIResource>;
  names: Array<Name>;
};
