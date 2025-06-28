import { InputSignal } from "@angular/core";

export interface Widget {
  name: InputSignal<string>;
  pay: () => void;
}
