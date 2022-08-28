import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface MoveFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
};
