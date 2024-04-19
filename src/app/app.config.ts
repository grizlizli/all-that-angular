import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideApiEndpointUrl } from './providers/api-endpoint-url.provider';
import { provideApiEndpointConfig } from './providers/api-endpoint-config.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideApiEndpointUrl(),
    provideApiEndpointConfig()
  ]
};
