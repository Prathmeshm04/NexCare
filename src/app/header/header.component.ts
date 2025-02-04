import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  userEmail: string | null = null;
  dropdownOpen: boolean = false; // Track if dropdown is open or closed

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Subscribe to user email changes
    this.userService.email$.subscribe(email => {
      this.userEmail = email;
    });
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.userEmail !== null;
  }

  // Toggle the dropdown
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Logout and clear email
  logout() {
    this.userService.clearEmail();
    this.dropdownOpen = false;      // Close the dropdown after logout
   this.userEmail = null;
    this.dropdownOpen = false; // Close the dropdown after logout
  }
}

