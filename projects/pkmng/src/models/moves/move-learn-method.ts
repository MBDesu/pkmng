import { Description } from '../utility/common/description';
import { Name } from '../utility/common/name';
import { NamedAPIResource } from '../utility/common/named-api-resource';

export interface MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Array<Description>;
  names: Array<Name>;
  version_groups: Array<NamedAPIResource>;
};
