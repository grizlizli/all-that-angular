import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideApiEndpointUrl } from './core/providers/api-endpoint-url.provider';
import { provideApiEndpointConfig } from './core/providers/api-endpoint-config.provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    provideApiEndpointUrl(),
    provideApiEndpointConfig(),
    provideHttpClient(),
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ]
};
