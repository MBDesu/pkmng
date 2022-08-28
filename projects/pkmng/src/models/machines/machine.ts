import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface Machine {
  id: number;
  item: NamedAPIResource;
  move: NamedAPIResource;
  version_group: NamedAPIResource;
};
