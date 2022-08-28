import { NamedAPIResource } from '../utility/common/named-api-resource';
import { ChainLink } from './chain-link';

export interface EvolutionChain {
  id: number;
  baby_trigger_item: NamedAPIResource;
  chain: ChainLink;
};
