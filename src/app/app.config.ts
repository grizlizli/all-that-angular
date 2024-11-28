import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideApiEndpointUrl } from './providers/api-endpoint-url.provider';
import { provideApiEndpointConfig } from './providers/api-endpoint-config.provider';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideApiEndpointUrl(),
    provideApiEndpointConfig(),
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);

      return {
        link: httpLink.create({
          uri: 'https://countries.trevorblades.com',
        }),
        cache: new InMemoryCache(),
      };
    })
  ]
};
