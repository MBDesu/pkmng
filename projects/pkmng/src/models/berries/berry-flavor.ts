import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { BerryFlavorMap } from './berry-flavor-map';

export interface BerryFlavor {
  id: number;
  name: string;
  berries: Array<BerryFlavorMap>;
  contest_type: NamedAPIResource;
  names: Array<Name>;
};
