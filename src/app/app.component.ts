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
  
  studentResponse : any; 

  employeeResponse: any; //response can be anything in object

  showTable : boolean = false;

  constructor(private appName:AppService) //in constructor giving the address of a service file to import into this file 
                   //AppService is a cls name of service file, appName is just a name which stores the AppService cls
  {
  };

  getAllEmployees(){
    console.log("ts file");
    //write a code to call a fun in service file
    this.appName.getEmployees().subscribe((resp)=>{
     console.log(resp);
     this.employeeResponse= resp; //to remove the status values in object we are access just accessing data values 
     this.showTable = true;
    });
  };

  changeToReact(){
    console.log("This is React");
    this.appType="This is React app";
  }

  changeToAngular(){
    console.log("This is Angular");
    this.appType="This is Angular app";
  };
  
  getAllStudents(){
    console.log("Student details")
    this.appName.getStudentDetails().subscribe( (resp) =>{
      console.log(resp);
      
     this.studentResponse = resp;
     console.log(this.studentResponse);
    });
  };

}