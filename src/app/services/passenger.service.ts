import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from '../model/passengers.model';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

 baseUrl=`http://localhost:3000`;


  getAllPassengers():Observable<Passenger[]>{
    return this.http.get<Passenger[]>(this.baseUrl+"/passengers");
  }

  deleteProduct(passenger:Passenger):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/passengers/"+passenger.id);
  }

  updateProduct(passenger:Passenger):Observable<Passenger>{
    return this.http.put<Passenger>(this.baseUrl+"/passengers/"+passenger.id,passenger);
  }

  save(passenger:Passenger):Observable<Passenger>{
    return this.http.post<Passenger>(this.baseUrl+"/passengers",passenger);
  }

}
