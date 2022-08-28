import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonSpeciesGender } from './pokemon-species-gender';

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: Array<PokemonSpeciesGender>;
  required_for_evolution: Array<NamedAPIResource>;
};
