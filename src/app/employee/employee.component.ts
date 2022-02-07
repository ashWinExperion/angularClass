import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.bindListDepartments();
  }

  insertEmpRecord(form?:NgForm){
    this.empService.insertEmployee(form.value).subscribe((result)=>
      {
        alert("");
        console.log(result);
      }
      )
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    let addId=this.empService.formData.EmployeeId;
    if(addId==0||addId==null)
    {
      this.insertEmpRecord(form);
    }
    else
    {

    }
    //Insert or Update
  }



}
