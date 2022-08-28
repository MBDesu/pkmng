import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface ItemCategory {
  id: number;
  name: string;
  items: Array<NamedAPIResource>;
  names: Array<Name>;
  pocket: NamedAPIResource;
};
