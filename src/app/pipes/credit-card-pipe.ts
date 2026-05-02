import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard',
})
export class CreditCardPipe implements PipeTransform {
  transform(value:string,):string {
    if(!value)return'';

    return value.substring(0,4) + ' - '+
           value.substring(4,8) + ' - ' +
           value.substring(8,12) + ' - ' +
           value.substring(12,16);
  }
}
