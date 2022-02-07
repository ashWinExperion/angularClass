import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Employee} from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employess:Employee[];
  formData: Employee=new Employee();
  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<any>{
    return this.httpClient.get(environment.apiUrl+"/api/empc");
  }


  delEmp(id:number)
  {
    alert("");
    return this.httpClient.delete(environment.apiUrl+"api/empc/"+id);
  }

  bindListEmployees(){
    this.httpClient.get(environment.apiUrl+'/api/empc')
    .toPromise().then(
      response=>{
        this.employess= response as Employee[]
      }
    )
  }
}




