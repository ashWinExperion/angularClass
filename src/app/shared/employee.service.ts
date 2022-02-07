import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Employee} from './employee';
import {DepartmentCls} from './departmentCls'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employess:Employee[];
  departments:DepartmentCls[];
  formData: Employee=new Employee();
  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/empc");
  }


  delEmp(id:number)
  {
    alert("");
    return this.httpClient.delete(environment.apiUrl+"/api/empc/"+id);
  }

  bindListEmployees(){
    this.httpClient.get(environment.apiUrl+'/api/empc')
    .toPromise().then(
      response=>{
        this.employess= response as Employee[]
      }
    )
  }



  
  bindListDepartments(){
    this.httpClient.get(environment.apiUrl+'/api/dep')
    .toPromise().then(
      response=>{
       
        
        this.departments= response as DepartmentCls[];
        console.log(this.departments);
      }
    )
  }


  getEmployee(id:number):Observable<any>
  {
    alert("");
    return this.httpClient.get(environment.apiUrl+"/api/empc/"+id);
  }

  insertEmployee(employee:Employee):Observable<any>
  {
    alert(environment.apiUrl+"api/empc");
    return this.httpClient.post(environment.apiUrl+"/api/empc",employee);
  }

  updateEmployee(employee:Employee):Observable<any>
  {
    alert("");
    return this.httpClient.put(environment.apiUrl+"/api/empc",employee);
  }


}




