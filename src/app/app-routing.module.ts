import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'employee',component:EmployeesListComponent},
  {path:'emp',component:EmployeeComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'manager',component:ManagerComponent,canActivate:[AuthGuard],data:{role:'2'}},
  {path:'**',component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
