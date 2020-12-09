import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appType: string = ""; //intially it's a empty string 
  //when we call this changeToReact() fun empty str replaces with react app same with angular fun

  constructor(private appName:AppService) //in constructor giving the address of a service file to import into this file 
                   //AppService is a cls name of service file, appName is just a name which stores the AppService cls
  {

  };

  searchByCaseNumber()
  {
    console.log("search by case number button worked"); //to check in o/p in console 
  };

  getAllEmployees(){
    console.log("ts file");
    //write a code to call a fun in service file
   this.appName.getEmployees();

  };

  changeToReact(){
    console.log("This is React");
    this.appType="react app";
  }
  changeToAngular(){
    console.log("This is Angular");
    this.appType="angular app";
  };

}