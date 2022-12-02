import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCartas'
})
export class FiltroCartasPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (!value) return null;
    if (!args) return value;

    return value.filter(function (carta: any) {
      return carta.cardname.toLowerCase().includes(args.toLowerCase())
      || (carta.attribute && carta.attribute.toLowerCase().includes(args.toLowerCase()))
      || (carta.types && carta.types.toLowerCase().includes(args.toLowerCase()));

    });

  }

}
