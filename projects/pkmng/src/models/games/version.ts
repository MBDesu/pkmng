import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface Version {
  id: number;
  name: string;
  names: Array<Name>;
  version_group: NamedAPIResource;
};
