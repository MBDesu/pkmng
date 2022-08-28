import { GenerationGameIndex } from '../utility/common/generation-game-index';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface Location {
  id: number;
  name: string;
  region: NamedAPIResource;
  names: Array<Name>;
  game_indices: Array<GenerationGameIndex>;
  area: Array<NamedAPIResource>;
};
