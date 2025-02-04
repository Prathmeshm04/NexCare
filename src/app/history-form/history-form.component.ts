// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MedicalHistoryService } from '../medical-history.service';
// import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
// import { UserService } from '../user.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-history-form',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
//   templateUrl: './history-form.component.html',
//   styleUrl: './history-form.component.scss'
// })
// export class HistoryFormComponent implements OnInit, OnDestroy {
//   medicalHistoryForm: FormGroup;
//   email: string = ''; // Store the user's email
//   private emailSubscription!: Subscription;

//   constructor(private fb: FormBuilder,
//               private medicalHistoryService: MedicalHistoryService,
//               private userService: UserService) {
//     this.medicalHistoryForm = this.fb.group({
//       name: ['', Validators.required],
//       age: ['', Validators.required],
//       sex: ['', Validators.required],
//       mobileNo: ['', Validators.required],
//       address: ['', Validators.required],
//       email: ['', Validators.required],
//       disease1: ['', Validators.required],
//       medicine1: ['', Validators.required],
//       disease2: [''],
//       medicine2: [''],
//       medicineAllergicTo: [''],
//       menstruationCycleRegular: ['']
//     });
//   }

//   ngOnInit(): void {
//     // Subscribe to the email observable from UserService
//     this.emailSubscription = this.userService.email$.subscribe(email => {
//       if (email) {
//         this.email = email; // Assign the email from UserService
//         console.log('Email retrieved from UserService:', this.email); // Debug log
//       } else {
//         console.warn('No email found in UserService.'); // Warn if email is not set
//       }
//     });
//   }

//   onSubmit() {
//     if (this.medicalHistoryForm.valid) {
//       console.log('Email before submitting:', this.email); // Debugging log
//       const medicalHistory = {
//         email: this.email, // Use the email from the service
//         history: this.medicalHistoryForm.value
//       };
//       console.log('Medical history object:', medicalHistory);
//       this.medicalHistoryService.saveMedicalHistory(medicalHistory).subscribe({
//         next: (response) => {
//           alert('Medical History Saved Successfully');
//           this.medicalHistoryForm.reset();  // Reset form after successful submission
//         },
//         error: (error) => {
//           console.error('Error saving medical history', error);
//         }
//       });
//     } else {
//       alert('Please fill all required fields.');
//     }
//   }

//   ngOnDestroy(): void {
//     this.emailSubscription.unsubscribe(); // Clean up the subscription
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MedicalHistoryService } from '../medical-history.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-history-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule,RouterOutlet,RouterModule],
  templateUrl: './history-form.component.html',
  styleUrl: './history-form.component.scss'
})
export class HistoryFormComponent implements OnInit, OnDestroy {
  medicalHistoryForm: FormGroup;
  email: string = ''; // Store the user's email
  private emailSubscription!: Subscription;

  constructor(private fb: FormBuilder,
              private medicalHistoryService: MedicalHistoryService,
              private userService: UserService) {
    this.medicalHistoryForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sex: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      disease1: ['', Validators.required],
      medicine1: ['', Validators.required],
      disease2: [''],
      medicine2: [''],
      medicineAllergicTo: [''],
      menstruationCycleRegular: ['']
    });
  }

  ngOnInit(): void {
    // Subscribe to the email observable from UserService
    this.emailSubscription = this.userService.email$.subscribe(email => {
      if (email) {
        this.email = email; // Assign the email from UserService
        console.log('Email retrieved from UserService:', this.email); // Debug log
        this.medicalHistoryForm.patchValue({ email: this.email }); // Set email in the form
      } else {
        console.warn('No email found in UserService.'); // Warn if email is not set
      }
    });
  }

  onSubmit() {
    if (this.medicalHistoryForm.valid) {
      console.log('Email before submitting:', this.email); // Debugging log
      const medicalHistory = {
        email: this.email, // Use the email from the service
        history: this.medicalHistoryForm.value
      };
      console.log('Medical history object:', medicalHistory);
      this.medicalHistoryService.saveMedicalHistory(medicalHistory).subscribe({
        next: (response) => {
          alert('Medical History Saved Successfully');
          this.medicalHistoryForm.reset();  // Reset form after successful submission
        },
        error: (error) => {
          console.error('Error saving medical history', error);
        }
      });
    } else {
      alert('Please fill all required fields.');
    }
  }

  ngOnDestroy(): void {
    this.emailSubscription.unsubscribe(); // Clean up the subscription
  }
}
