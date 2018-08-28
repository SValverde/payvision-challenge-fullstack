import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(params){
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Authorization", "Basic " + btoa("code-challenge:payvisioner")); 
    headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
    return this.http.get('https://jovs5zmau3.execute-api.eu-west-1.amazonaws.com/prod/transactions',
     {headers: headers, params: params},  )
  }

}
