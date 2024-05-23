import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoproducto'
})
export class TipoproductoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
