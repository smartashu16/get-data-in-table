import { Component, OnInit } from '@angular/core';
import { GetApiService } from './get-api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'get-api';
  products: any = [];
  
  filterTerm!: string;
  p: number = 1;

  constructor(private api: GetApiService) { }

  addUser(formObj:any ){
    console.log(formObj);
    this.api.createUser(formObj).subscribe((response) => {
      console.log("User added");
      console.log(response);
    })
  }

  ngOnInit() {
    this.api.apiCall().subscribe((data) => {
      console.warn("get api Data", data);
      this.products = data;
      
    })
  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
