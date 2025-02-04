// import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { isPlatformBrowser } from '@angular/common';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private emailSubject = new BehaviorSubject<string | null>(null);
//   email$ = this.emailSubject.asObservable(); // Observable to subscribe to email changes
//   private localStorageAvailable: boolean = false;

//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {
//     // Check if localStorage is available (browser environment check)
//     this.localStorageAvailable = isPlatformBrowser(this.platformId) && !!window.localStorage;
//     if (this.localStorageAvailable) {
//       const storedEmail = localStorage.getItem('userEmail');
//       if (storedEmail) {
//         this.emailSubject.next(storedEmail);
//         console.log('Email retrieved from localStorage:', storedEmail);
//       }
//     }
//   }

//   // Set email and store in localStorage
//   setEmail(email: string) {
//     if (this.localStorageAvailable) {
//       localStorage.setItem('userEmail', email); // Store email in localStorage
//     }
//     this.emailSubject.next(email); // Set the user email
//     console.log('Email set in UserService:', email);
//   }

//   // Clear email from localStorage
//   clearEmail() {
//     if (this.localStorageAvailable) {
//       localStorage.removeItem('userEmail'); // Remove email from localStorage
//     }
//     this.emailSubject.next(null); // Clear the email
//     console.log('Email cleared from UserService');
//   }
// }


import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private emailSubject = new BehaviorSubject<string | null>(null);
  email$ = this.emailSubject.asObservable(); // Observable to subscribe to email changes
  private localStorageAvailable: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Check if localStorage is available (browser environment check)
    this.localStorageAvailable = isPlatformBrowser(this.platformId) && !!window.localStorage;

    // Retrieve email from localStorage if available
    if (this.localStorageAvailable) {
      const storedEmail = localStorage.getItem('userEmail');
      if (storedEmail) {
        this.emailSubject.next(storedEmail);
        console.log('Email retrieved from localStorage:', storedEmail);
      }
    }
  }

  // Set email and store in localStorage
  setEmail(email: string) {
    if (this.localStorageAvailable) {
      localStorage.setItem('userEmail', email); // Store email in localStorage
    }
    this.emailSubject.next(email); // Update email in the BehaviorSubject
    console.log('Email set in UserService:', email);
  }

  // Clear email from localStorage
  clearEmail() {
    if (this.localStorageAvailable) {
      localStorage.removeItem('userEmail'); // Remove email from localStorage
    }
    this.emailSubject.next(null); // Clear the BehaviorSubject
    console.log('Email cleared from UserService');
  }
}
