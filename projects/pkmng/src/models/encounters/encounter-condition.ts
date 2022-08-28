import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface EncounterCondition {
  id: number;
  name: string;
  names: Array<Name>;
  values: Array<NamedAPIResource>;
};
