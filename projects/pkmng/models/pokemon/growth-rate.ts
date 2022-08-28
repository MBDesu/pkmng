import { Description } from '../utility/common/description';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { GrowthRateExperienceLevel } from './growth-rate-experience-level';

export interface GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Array<Description>;
  levels: Array<GrowthRateExperienceLevel>;
  pokemon_species: Array<NamedAPIResource>;
};
