import { Component, Input } from "@angular/core";
import { Passenger, passengers } from "src/assets/passengers";
@Component({
  selector: "passenger-counter",
  template: ` <h4>
    Checked In passengers : {{ countPassenger() }} / {{ items?.length }}
  </h4>`,
})
export class PassengerCountComponent {
  @Input() items: Passenger[];

  countPassenger(): number {
    return this.items?.filter((passenger) => passenger?.checkedIn).length;
  }
}
