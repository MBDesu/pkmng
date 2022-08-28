import { Encounter } from './encounter';
import { NamedAPIResource } from './named-api-resource';

export interface VersionEncounterDetail {
  version: NamedAPIResource;
  max_chance: number;
  encounter_details: Array<Encounter>;
};
