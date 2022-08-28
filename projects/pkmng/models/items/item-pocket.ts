import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface ItemPocket {
  id: number;
  name: string;
  categories: Array<NamedAPIResource>;
  names: Array<Name>;
};
