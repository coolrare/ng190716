import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): any {
    if (value.length > 10) {
      return value.substr(0, 3) + '***' + value.substr(6, 4);
    } else {
      return '***';
    }
  }

}
