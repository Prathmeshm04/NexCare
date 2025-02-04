import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  username: string="";
    email: string="";
    password: string="";
    dob: Date=new Date();

    constructor(private http:HttpClient){

    }

    save()
    {
      let bodydata={
        "username":this.username,
        "email":this.email,
        "password":this.password,
        "dob":this.dob
      };

      this.http.post("http://localhost:8080/api/v1/user/save",bodydata,{responseType: 'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData);
        alert("Employee Registered Successfully");
      })
    }

}
