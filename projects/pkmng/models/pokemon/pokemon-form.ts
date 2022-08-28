import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { PokemonFormSprites } from './pokemon-form-sprites';
import { PokemonFormType } from './pokemon-form-type';

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource;
  types: Array<PokemonFormType>;
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource;
  names: Array<Name>;
  form_names: Array<Name>;
};
