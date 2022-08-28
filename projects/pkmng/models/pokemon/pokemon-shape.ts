import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { AwesomeName } from './awesome-name';

export interface PokemonShape {
  id: number;
  name: string;
  awesome_names: Array<AwesomeName>;
  names: Array<Name>;
  pokemon_species: Array<NamedAPIResource>;
};
