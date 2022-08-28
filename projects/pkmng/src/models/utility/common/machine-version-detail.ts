import { APIResource } from './api-resource';
import { NamedAPIResource } from './named-api-resource';

export interface MachineVersionDetail {
  machine: APIResource;
  version_group: NamedAPIResource;
};
