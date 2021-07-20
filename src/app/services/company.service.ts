import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  private _url : string = "";

  getCompanies(){
    return[
      {"id" : 1, "name": "Citicorp"},
      {"id" : 2, "name": "Cisco"},
    ]
    //return this.http.get(this._url);
  }
  
}
