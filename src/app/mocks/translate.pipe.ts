import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: false
})
export class TranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
