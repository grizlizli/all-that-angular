import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[mkTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input({alias: 'mkTooltip', required: true}) tooltip: string = '';

  constructor() { }

}

