import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule,RouterOutlet],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userEmail: string | null = null;

  constructor(private userService: UserService, private router: Router) {
    // Get the logged-in user's email
    this.userService.email$.subscribe(email => {
      this.userEmail = email;
    });
  }

  // Logout function clears the email from UserService and redirects to login page
  logout() {
    this.userService.clearEmail();
    this.router.navigateByUrl('/login');
  }
}
