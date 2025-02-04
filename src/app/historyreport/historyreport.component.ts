// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { MedicalHistoryService } from '../medical-history.service';
// import { HttpClientModule } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { UserService } from '../user.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-historyreport',
//   standalone: true,
//   imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './historyreport.component.html',
//   styleUrls: ['./historyreport.component.scss'] // Corrected `styleUrl` to `styleUrls`
// })
// export class HistoryreportComponent implements OnInit, OnDestroy { // Implement OnDestroy
//   medicalHistory: any;
//   email: string = ''; // Store the user's email
//   private emailSubscription!: Subscription; // Subscription for email observable

//   constructor(
//     private medicalHistoryService: MedicalHistoryService,
//     private userService: UserService
//   ) {}

//   ngOnInit(): void {
//     // Subscribe to the email observable from UserService
//     this.emailSubscription = this.userService.email$.subscribe(email => {
//       if (email) { // Check if email is not null or undefined
//         this.email = email; // Assign the email from UserService
//         this.fetchMedicalHistory(); // Fetch medical history if email is available
//       }
//     });
//   }

//   fetchMedicalHistory() {
//     if (this.email) { // Check if email is set before making the request
//       this.medicalHistoryService.getMedicalHistory(this.email).subscribe({
//         next: (data) => {
//           console.log('Fetched medical history:', data);
//           this.medicalHistory = data;
//         },
//         error: (error) => {
//           console.error('Error fetching medical history', error);
//         }
//       });
//     }
//   }

//   ngOnDestroy(): void {
//     this.emailSubscription.unsubscribe(); // Unsubscribe from the email observable
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MedicalHistoryService } from '../medical-history.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-historyreport',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './historyreport.component.html',
  styleUrls: ['./historyreport.component.scss']
})
export class HistoryreportComponent implements OnInit, OnDestroy {
  medicalHistory: any = null;
  email: string = ''; // Store the user's email
  private emailSubscription!: Subscription; // Subscription for email observable

  constructor(
    private medicalHistoryService: MedicalHistoryService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Subscribe to the email observable from UserService
    this.emailSubscription = this.userService.email$.subscribe(email => {
      if (email) {
        this.email = email; // Assign the email from UserService
        this.fetchMedicalHistory(); // Fetch medical history if email is available
      } else {
        console.warn('No email found, cannot fetch medical history');
      }
    });
  }

  fetchMedicalHistory(): void {
    if (this.email) {
      this.medicalHistoryService.getMedicalHistory(this.email).subscribe({
        next: (data) => {
          console.log('Fetched medical history:', data);
          this.medicalHistory = data;
        },
        error: (error) => {
          console.error('Error fetching medical history', error);
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.emailSubscription) {
      this.emailSubscription.unsubscribe(); // Clean up the subscription
    }
  }
}

