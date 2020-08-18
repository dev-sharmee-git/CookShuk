import {Pipe, PipeTransform} from '@angular/core';
import {UnitType} from '../models/unit-type.enum';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {
  /**
   *
   * @param value The number to be formatted as imperial to metric and vice-versa.
   * @param unit The name of measurement unit. eg. g, ml, tsp
   * @param unitType The type of unit which is defined in UnitType enum. eg, volume, weight
   * @param system The name of system.
   *  'i' = Imperial
   *  'm' = Metric
   */
  transform(value: number, unit: string, unitType: UnitType, system: 'i' | 'm'): string {
    // TODO: Conversion of units are not correct, it's just to show the functionality
    let result = value + ' ' + unit;
    if (system === 'i') {
      if (unitType === UnitType.Volume) {
        result = (value / 5) + ' tsp';
      } else if (unitType === UnitType.Weight) {
        result =  value / 28 + ' oz';
      } else if (unitType === UnitType.Liquid) {
        result =  value / 50 + ' oz';
      }
    } else {
      if (unitType === UnitType.Volume) {
        result =  value * 5 + ' ml';
      } else if (unitType === UnitType.Weight) {
        result =  value * 28 + ' g';
      } else if (unitType === UnitType.Liquid) {
        result =  value * 50 + ' oz';
      }
    }
    return result;
  }
}
