import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetemail',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './resetemail.component.html',
  styleUrl: './resetemail.component.scss'
})
export class ResetemailComponent {
  email: string="";
  constructor(private router:Router,private http:HttpClient){

  }

  Reset()
  {
    console.log(this.email);
    let bodydata={
        email:this.email
    };
    this.http.put("http://localhost:8080/api/v1/user/forgot_password",bodydata).subscribe((resultData:any)=>
    {
      console.log(resultData);
      if(resultData.message=="Email sent"){
        this.router.navigateByUrl('/login');
      }
      else{
        alert("Incorrect Email");
      }
    })

  }

}
