import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { PassengerService } from "../services/passenger.service";
import { PassengerAddComponent } from './components/passenger-add/passenger-add.component';
import { PassengerHeaderComponent } from './containers/passenger-header/passenger-header.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerListComponent,
    PassengerAddComponent,
    PassengerHeaderComponent,
  ],
  imports: [CommonModule , FormsModule],
  providers: [PassengerService],
  exports: [PassengerDashboardComponent , PassengerHeaderComponent],
})
export class PassengersModule {}
