import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VersionEncounterDetail } from '../utility/common/version-encounter-detail';

export interface LocationAreaEncounter {
  location_area: NamedAPIResource;
  version_details: Array<VersionEncounterDetail>;
};
