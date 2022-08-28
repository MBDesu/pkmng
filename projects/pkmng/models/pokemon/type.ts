import { GenerationGameIndex } from '../utility/common/generation-game-index';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { TypePokemon } from './type-pokemon';
import { TypeRelations } from './type-relations';
import { TypeRelationsPast } from './type-relations-past';

export interface Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: Array<TypeRelationsPast>;
  game_indices: Array<GenerationGameIndex>;
  generation: NamedAPIResource;
  move_damage_class: NamedAPIResource;
  names: Array<Name>;
  pokemon: Array<TypePokemon>;
  moves: Array<NamedAPIResource>;
};
