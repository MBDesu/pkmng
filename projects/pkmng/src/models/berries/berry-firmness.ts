import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface BerryFirmness {
  id: number;
  name: string;
  berries: Array<NamedAPIResource>;
  names: Array<Name>;
};
