import { Name } from './common/name';

export interface Language {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: Array<Name>;
};
