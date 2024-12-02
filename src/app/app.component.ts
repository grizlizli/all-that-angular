import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ResponsiveService } from './services/responsive.service';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'mk-root',
    standalone: true,
    imports: [RouterLink, RouterOutlet, MatSidenavModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly title = 'All That Angular';
  private readonly responsiveService = inject(ResponsiveService);

  readonly themeSelectorMode  = computed(() => {
    if (this.responsiveService.largeWidth()) {
      return 'side';
    }

    return 'over';
  })
}
