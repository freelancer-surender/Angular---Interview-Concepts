import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: any, user: string): any {
    console.log("Result pipe is executed");
    if (value < 35) {
      return user + ' is fail. Got ' + value + ' marks';
    } else {
      return user + ' is pass. Got ' + value + ' marks';
    }
  }

}
