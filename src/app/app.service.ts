import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  getEmployees(){
    //when we call this fun from the ts file we can c the o/p in console
    console.log("Service File");
      //request going to backend
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  }

  getStudentDetails(){
    console.log("student info");
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees")
  };

}
