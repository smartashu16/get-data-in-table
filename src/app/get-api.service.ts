import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }


  apiCall(){
   // return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  //  return this.http.get('http://localhost:4200/data');
    return this.http.get('http://localhost:3000/data');
  }

  createUser(user: any){
    return this.http.post("http://localhost:3000/data", user);
  }
}
