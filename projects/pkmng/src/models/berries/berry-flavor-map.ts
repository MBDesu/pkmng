import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface BerryFlavorMap {
  /** How powerful the referenced flavor is for this berry. */
  potency: number;
  /** The referenced berry flavor. */
  flavor: NamedAPIResource;
};
