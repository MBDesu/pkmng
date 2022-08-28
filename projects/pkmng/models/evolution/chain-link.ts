import { NamedAPIResource } from '../utility/common/named-api-resource';
import { EvolutionDetail } from './evolution-detail';

export interface ChainLink {
  is_baby: boolean;
  species: NamedAPIResource;
  evolution_details: Array<EvolutionDetail>;
  evolves_to: Array<ChainLink>;
};
