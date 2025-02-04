// import { CommonModule } from '@angular/common';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router, RouterModule, RouterOutlet } from '@angular/router';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule,HttpClientModule,RouterOutlet,CommonModule,RouterModule],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.scss'
// })
// export class LoginComponent {
//   email: string="";
//   password: string="";

//   constructor(private router:Router,private http:HttpClient,private userService: UserService){

//   }

//   Login()
//   {
//     console.log(this.email);
//     console.log(this.password);
//     let bodydata={
//       email:this.email,
//       password:this.password
//     };

//     this.http.post("http://localhost:8080/api/v1/user/login",bodydata).subscribe((resultData:any)=>
//     {
//       console.log(resultData);
//       if(resultData.message=="Email not exists"){
//         alert("Email not exists");
//       }

//       else if(resultData.message=="Login Success"){
//         this.userService.setEmail(this.email);
//         this.router.navigateByUrl('/home');
//       }

//       else{
//         alert("Incorrect Email and Password not Match");
//       }
//     })
//   }
// }
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterOutlet,CommonModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  Login() {
    console.log('Entered Email:', this.email);
    console.log('Entered Password:', this.password);

    let bodydata = {
      email: this.email,
      password: this.password
    };

    this.http.post("http://localhost:8080/api/v1/user/login", bodydata).subscribe((resultData: any) => {
      console.log(resultData);

      if (resultData.message == "Email not exists") {
        alert("Email not exists");
      } else if (resultData.message == "Login Success") {
        console.log("Setting email in UserService:", this.email);
        this.userService.setEmail(this.email);  // Store email in UserService
        this.router.navigateByUrl('/home');
      } else {
        alert("Incorrect Email and Password not Match");
      }
    });
  }
}

