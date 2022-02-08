import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { from } from 'rxjs';
import { EmployeeService } from '../shared/employee.service';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
 
  empId:number;
  constructor(public empService: EmployeeService,
    private route:ActivatedRoute,
    private toastService:ToastrModule) { }

  ngOnInit(): void {
    this.empService.bindListDepartments();
    this.empId=this.route.snapshot.params['id'];
   
    if(this.empId!=0 || this.empId!=null)
    {
      
      this.empService.bindEmployee(this.empId).subscribe(result=>{
        console.log(result);
        var datePipe = new DatePipe("en-UK");
        let formatedDate=datePipe.transform(result.DateOfJoin,'yyyy-MM-dd');
        result.DateOfJoin=formatedDate;
        this.empService.formData=Object.assign({},result);
      });
    
    }
  }

  insertEmpRecord(form?:NgForm){
    this.empService.insertEmployee(form.value).subscribe((result)=>
      {
        alert("");
        console.log(result);
        
        alert("Inserted Succefully..!!");
      }
      )
  }



  updateEmpRecord(form?:NgForm){
    this.empService.updateEmployee(form.value)
    .subscribe((result)=>
      {
        alert("Update");
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
          this.updateEmpRecord(form);
          this.resetForm();
    }
    //Insert or Update
  }

  resetForm(form?:NgForm)
  {
    if(form!=null)
    {
      form.resetForm();
    }
  }

}
