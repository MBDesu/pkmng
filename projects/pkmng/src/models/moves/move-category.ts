import { Description } from '../utility/common/description';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface MoveCategory {
  id: number;
  name: string;
  moves: Array<NamedAPIResource>;
  descriptions: Array<Description>;
};
