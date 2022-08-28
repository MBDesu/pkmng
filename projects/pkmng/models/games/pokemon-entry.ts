import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: NamedAPIResource;
};
