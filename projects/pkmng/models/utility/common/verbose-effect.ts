import { NamedAPIResource } from './named-api-resource';

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
};
