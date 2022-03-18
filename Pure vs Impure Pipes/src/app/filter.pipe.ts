import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTxt: string): any {
    console.log("Filter pipe is executed");
    if (searchTxt === '') {
      return value;
    }
    return value.filter((item: string) => item.startsWith(searchTxt));
  }

}
