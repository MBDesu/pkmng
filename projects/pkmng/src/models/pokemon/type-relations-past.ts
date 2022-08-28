import { NamedAPIResource } from '../utility/common/named-api-resource';
import { TypeRelations } from './type-relations';

export interface TypeRelationsPast {
  generation: NamedAPIResource;
  damage_relations: TypeRelations;
};
