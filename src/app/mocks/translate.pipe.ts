import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: false
})
export class TranslatePipe implements PipeTransform {

  transform(key: string): string {
    return key;
  }
}
