import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PassengerService } from "src/app/services/passenger.service";

import { Passenger } from "src/assets/passengers";
import Swal from 'sweetalert2'

@Component({
  selector: "component-dashboard",
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ["./passenger-dashboard.component.css"],
})
export class PassengerDashboardComponent implements OnInit {
  passengers : Passenger[];

  constructor(private passengerService: PassengerService , private toastr: ToastrService ) {}

  ngOnInit() {
    this.getAllPassengers();
    
  }

  // GetAllPassenger Function 

  private getAllPassengers() {
    this.passengerService.getAllPassengers().subscribe(
      data => {
        console.log(data);
        this.passengers = data;
      }
    );
  }


  
  onDelete(p: Passenger) {
    let v=confirm("Etes vous sûre?");
    if(v==true)
   this.passengerService.deletePassengers(p)
     .subscribe(data=>{
       this.getAllPassengers();
     })
 }
  
 

  editPassenger(passenger: Passenger) {
    let ret;
    this.passengers = this.passengers.map((p) => {
      if (p.id === passenger.id) {
        
            ret = Object.assign({}, p, passenger);


        this.passengerService.updatePassengers(passenger).subscribe(
          res => {
            this.toastr.success('Update !', 'Updated OK!');
          },
          err => {
            console.log(err)
          }
        )

      }
      else {
        ret = p;
      }
      return ret;
    });
  }

  removePassenger(p: Passenger) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        this.passengerService.deletePassengers(p).subscribe((data) => {
          this.getAllPassengers();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  }


  searchByFullName(event : any) {
    this.passengerService.searchPassengers(event.target.value).subscribe(
      res => {
        this.passengers = res

      }
    )
  }

  checkedInPassenger() {
    this.passengerService.getCheckedInPassenger().subscribe(
      res => {
        this.passengers = res;
      }
    )
  }

  
}


/*

getAllProducts():Observable<Product[]>{
    //let host=(Math.random()>0.2)?environment.host:environment.unreachableHost;
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products");
  }
  getSelectedProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?selected=true");
  }
  getAvailableProducts():Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?available=true");
  }
  searchProducts(keyword:string):Observable<Product[]>{
    let host=environment.host;
    return this.http.get<Product[]>(host+"/products?name_like="+keyword);
  }
  select(product:Product):Observable<Product>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }
  deleteProduct(product:Product):Observable<void>{
    let host=environment.host;
    product.selected=!product.selected;
    return this.http.delete<void>(host+"/products/"+product.id);
  }
  save(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.post<Product>(host+"/products",product);
  }
  getProduct(id:number):Observable<Product>{
    let host=environment.host;
    return this.http.get<Product>(host+"/products/"+id);
  }
  updateProduct(product:Product):Observable<Product>{
    let host=environment.host;
    return this.http.put<Product>(host+"/products/"+product.id,product);
  }

  */