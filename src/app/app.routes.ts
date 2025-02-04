import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ResetemailComponent } from './resetemail/resetemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HistoryFormComponent } from './history-form/history-form.component';
import { HistoryreportComponent } from './historyreport/historyreport.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:"signup",
    component:SignupComponent
  },
  {
    path:"resetemail",
    component:ResetemailComponent
  },
  {
    path:"resetpassword",
    component:ResetpasswordComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"historyform",
    component:HistoryFormComponent
  },
  {
    path:"historyreport",
    component:HistoryreportComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  }
];
