import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  servicesURl : string ='' ;

  constructor(private http : HttpClient) {
    this.servicesURl ='http://localhost:3000/tasks'
   }
}
