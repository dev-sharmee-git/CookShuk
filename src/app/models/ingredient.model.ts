import {UnitType} from './unit-type.enum';

export class Ingredient {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  unitType: UnitType;
}
