import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  page:number =1;
  filter:string;
  
  constructor(public employeeService : EmployeeService,
    private router:Router) { }

  ngOnInit(): void { //Life Cycle Hook
    
    //this.getEmployees();

    this.employeeService.bindListEmployees();

  }

  getEmployees(){
    this.employeeService.getAllEmployees().subscribe(
      response=>{
        console.log(response);
      },
      error=>{
        console.log("Error!!!" + error);
      }
    )
  }


  updateEmp(id:number){
    alert(id);
    this.router.navigate(['emp',id])
  }

  deleteEmp(id:number)
  {
    if(confirm("Are U Sure..!!?")){
      this.employeeService.delEmp(id).subscribe(
        response=>{
          this.employeeService.bindListEmployees();
        },
        errror=>{
          console.log("Error");
        }
      )
    }
  }
}
