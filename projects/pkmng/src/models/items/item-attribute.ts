import { Description } from '../utility/common/description';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface ItemAttribute {
  id: number;
  name: string;
  items: Array<NamedAPIResource>;
  names: Array<Name>;
  descriptions: Array<Description>;
};
