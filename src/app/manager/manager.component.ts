import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/auth-service.service';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  loggedUser:string;
  constructor(
     private authService:AuthServiceService,
     private router:Router) { }
  ngOnInit(): void {
     this.loggedUser=localStorage.getItem("USERNAME");
  }
//logout
logOut(){
  this.authService.logOut();
  this.router.navigateByUrl('login');
}
}