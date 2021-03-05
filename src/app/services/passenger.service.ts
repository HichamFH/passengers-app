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

  deletePassengers(passenger:Passenger):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/passengers/"+passenger.id);
  }

  updatePassengers(passenger:Passenger):Observable<Passenger>{
    return this.http.put<Passenger>(this.baseUrl+"/passengers/"+passenger.id,passenger);
  }

  save(passenger:Passenger):Observable<Passenger>{
    return this.http.post<Passenger>(this.baseUrl+"/passengers",passenger);
  }

  searchPassengers(keyword:string):Observable<Passenger[]>{
    return this.http.get<Passenger[]>(this.baseUrl+"/passengers?fullName_like="+keyword);
  }

  getCheckedInPassenger():Observable<Passenger[]>{
    return this.http.get<Passenger[]>(this.baseUrl+"/passengers?checkedIn=true");
  }

}
