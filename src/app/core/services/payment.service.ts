import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export abstract class PaymentService {
  protected readonly api = inject(ApiService);
  abstract pay: (amount: number) => number;

  endpointUrl() {
    return this.api.endpointUrl;
  }
}
