import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'responseTimeFormat'
})
export class ResponseTimeFormatPipe implements PipeTransform {

  transform(value: number): unknown {
    return 'Took ' + (value / 1000) + ' Seconds';
  }

}
