import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myAdd'
})
export class MyAddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    var result=0;
    result=value + args[0];
    return result;
  }

}
