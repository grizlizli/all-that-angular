import { EnvironmentProviders, InjectionToken, makeEnvironmentProviders } from "@angular/core";

export interface ApiEndpointConfig {
    endpoint: string;
    version: string;
    prefix: string;
}

export const API_ENDPOINT_CONFIG = new InjectionToken<ApiEndpointConfig>('API_ENDPOINT_CONFIG');

export const DEFAULT_API_ENDPOINT_CONFIG: ApiEndpointConfig = {
    endpoint: 'http://localhost:8000',
    version: '1',
    prefix: 'api'
};

export function provideApiEndpointConfig(apiEndpointConfig: ApiEndpointConfig = DEFAULT_API_ENDPOINT_CONFIG): EnvironmentProviders {
    return makeEnvironmentProviders([
        {
            provide: API_ENDPOINT_CONFIG,
            useValue: apiEndpointConfig
        }
    ]);
}