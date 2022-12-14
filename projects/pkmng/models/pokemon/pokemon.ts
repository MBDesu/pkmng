import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VersionGameIndex } from '../utility/common/version-game-index';
import { PokemonAbility } from './pokemon-ability';
import { PokemonHeldItem } from './pokemon-held-item';
import { PokemonMove } from './pokemon-move';
import { PokemonSprites } from './pokemon-sprites';
import { PokemonStat } from './pokemon-stat';
import { PokemonType } from './pokemon-type';
import { PokemonTypePast } from './pokemon-type-past';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<PokemonAbility>;
  forms: Array<NamedAPIResource>;
  game_indices: Array<VersionGameIndex>;
  held_items: Array<PokemonHeldItem>;
  location_area_encounters: string;
  moves: Array<PokemonMove>;
  past_types: Array<PokemonTypePast>;
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: Array<PokemonStat>;
  types: Array<PokemonType>;
};
