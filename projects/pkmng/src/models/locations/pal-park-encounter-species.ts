import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: NamedAPIResource;
};
