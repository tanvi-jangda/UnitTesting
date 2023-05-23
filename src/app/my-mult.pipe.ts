import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMult'
})
export class MyMultPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
  var result=0;
  result=value* args[0];
  return result;
  }

}
