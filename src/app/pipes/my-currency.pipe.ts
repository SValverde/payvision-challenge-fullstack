import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: any, numberOfZeros:number = 2, symbol:string = ','): any {
    let res = value.toFixed(numberOfZeros);
    res = res.replace('.',symbol);
    return res.replace(',',symbol);
  }

}
