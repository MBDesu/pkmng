import { APIResource } from '../utility/common/api-resource';
import { GenerationGameIndex } from '../utility/common/generation-game-index';
import { MachineVersionDetail } from '../utility/common/machine-version-detail';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VerboseEffect } from '../utility/common/verbose-effect';
import { VersionGroupFlavorText } from '../utility/common/version-group-flavor-text';
import { ItemHolderPokemon } from './item-holder-pokemon';
import { ItemSprites } from './item-sprites';

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  flint_effect: NamedAPIResource;
  attributes: Array<NamedAPIResource>;
  category: NamedAPIResource;
  effect_entries: Array<VerboseEffect>;
  flavor_text_entries: Array<VersionGroupFlavorText>;
  game_indices: Array<GenerationGameIndex>;
  names: Array<Name>;
  sprites: ItemSprites;
  held_by_pokemon: Array<ItemHolderPokemon>;
  baby_trigger_for: APIResource;
  machines: Array<MachineVersionDetail>;
};
