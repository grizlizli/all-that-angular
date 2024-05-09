import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringIsSubstring',
  standalone: true
})
export class StringIsSubstringPipe implements PipeTransform {

  transform(value: string, query: string | null): unknown {
    if (!query || !value) {
      return true;
    }
    else {
      return value.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    }
  }
}
