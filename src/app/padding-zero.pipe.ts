import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paddingZero'
})
export class PaddingZeroPipe implements PipeTransform {

  transform(input: any, size: number, direction?: string): any {
    if (!direction) {
        direction = 'L';
    }
    if (input === null || input === undefined)
        return "??";
    var zero = (size ? size : 4) - input.toString().length + 1;
    if(direction === 'R'){
        return input + Array(+(zero > 0 && zero)).join("0");
    }
    else{
        return Array(+(zero > 0 && zero)).join("0") + input;
    }
  }
}