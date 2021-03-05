import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Passenger } from 'src/app/model/passengers.model';
import { PassengerService } from 'src/app/services/passenger.service';

@Component({
  selector: 'app-passenger-add',
  templateUrl: './passenger-add.component.html',
  styleUrls: ['./passenger-add.component.css']
})
export class PassengerAddComponent implements OnInit {

  passenger : Passenger = {
    id: 0,
    fullName: '',
    checkInDate: 0,
    checkedIn: false,
    children: []
  }
  constructor(private passengerService : PassengerService , private toastr: ToastrService , private location: Location) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.passengerService.save(form.value).subscribe(
      data=> {
        this.toastr.success('Passanger Added  !', 'Added OK!');
      },
      err => {
        console.log(err);
      }
    )
      console.log(form.value)
  }


  goBack() {
      this.location.back();
  }

}
