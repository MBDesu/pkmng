import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface EncounterConditionValue {
  id: number;
  name: string;
  condition: NamedAPIResource;
  names: Array<Name>;
};
