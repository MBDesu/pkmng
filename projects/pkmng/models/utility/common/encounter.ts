import { NamedAPIResource } from './named-api-resource';

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: Array<NamedAPIResource>;
  chance: number;
  method: NamedAPIResource;
};
