import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
  email: string="";
  newPassword: string="";

  constructor(private router:Router,private http:HttpClient){

  }
  setPassword(){
    console.log(this.email);
    console.log(this.newPassword);
    let bodydata={
      email:this.email,
      newPassword:this.newPassword
    };

    this.http.put("http://localhost:8080/api/v1/user/set_password",bodydata).subscribe((resultData:any)=>
    {
      console.log(resultData);
      if(resultData.message=="Email not exists"){
        alert("Email not exists");
      }

      else if(resultData.message=="Password Reset"){
        this.router.navigateByUrl('/login');
      }

      else{
        alert("Incorrect Email and Password not Match");
      }
    })
  }

}
