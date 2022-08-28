import { NamedAPIResource } from '../utility/common/named-api-resource';
import { ContestName } from './contest-name';

export interface ContestType {
  id: number;
  name: string;
  berry_flavor: NamedAPIResource;
  names: Array<ContestName>;
};
