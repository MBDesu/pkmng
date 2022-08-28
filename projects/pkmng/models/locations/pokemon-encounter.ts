import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VersionEncounterDetail } from '../utility/common/version-encounter-detail';

export interface PokemonEncounter {
  pokemon: NamedAPIResource;
  version_details: Array<VersionEncounterDetail>;
};
