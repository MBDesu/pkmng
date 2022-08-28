import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';
import { VerboseEffect } from '../utility/common/verbose-effect';
import { AbilityEffectChange } from './ability-effect-change';
import { AbilityFlavorText } from './ability-flavor-text';
import { AbilityPokemon } from './ability-pokemon';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Array<Name>;
  effect_entries: Array<VerboseEffect>;
  effect_changes: Array<AbilityEffectChange>;
  flavor_text_entries: Array<AbilityFlavorText>;
  pokemon: Array<AbilityPokemon>;
};
