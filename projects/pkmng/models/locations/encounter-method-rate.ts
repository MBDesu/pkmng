import { NamedAPIResource } from '../utility/common/named-api-resource';
import { EncounterVersionDetails } from './encounter-version-details';

export interface EncounterMethodRate {
  encounter_method: NamedAPIResource;
  version_details: Array<EncounterVersionDetails>;
};
