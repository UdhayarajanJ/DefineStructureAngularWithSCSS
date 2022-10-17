import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'structure'
})
export class StructurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
