import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface TypeRelations {
  no_damage_to: Array<NamedAPIResource>;
  half_damage_to: Array<NamedAPIResource>;
  double_damage_to: Array<NamedAPIResource>;
  no_damage_from: Array<NamedAPIResource>;
  half_damage_from: Array<NamedAPIResource>;
  double_damage_from: Array<NamedAPIResource>;
};
