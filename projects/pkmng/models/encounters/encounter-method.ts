import { Name } from '../utility/common/name';

export interface EncounterMethod {
  id: number;
  name: string;
  order: number;
  names: Array<Name>;
};
