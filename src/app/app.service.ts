import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  getEmployees(){
    //when we call this fun from the ts file we can c the o/p in console
    console.log("Service File");
  }
}
