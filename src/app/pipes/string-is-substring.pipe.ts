import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSubstring',
  standalone: true
})
export class IsSubstringPipe implements PipeTransform {

  transform(value: string, query: string | null): boolean {
    if (!query || !value) {
      return true;
    }
    else {
      return value.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    }
  }
}
