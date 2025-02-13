import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideApiEndpointUrl } from './providers/api-endpoint-url.provider';
import { provideApiEndpointConfig } from './providers/api-endpoint-config.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideApiEndpointUrl(),
    provideApiEndpointConfig(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ]
};
