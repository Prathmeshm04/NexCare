// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MedicalHistoryService {
//   private baseUrl = 'http://localhost:8080/api/medical-history'; // Backend URL

//   constructor(private http: HttpClient) {}

//   // Save medical history
//   saveMedicalHistory(data: any): Observable<any> {
//     return this.http.post(`${this.baseUrl}/save`, data);
//   }

//   // Fetch medical history by user email
//   getMedicalHistory(email: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/get?email=${email}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalHistoryService {
  private baseUrl = 'http://localhost:8080/api/medical-history'; // Backend URL

  constructor(private http: HttpClient) {}

  checkMedicalHistoryExists(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/exists?email=${email}`);
  }

  // Save medical history
  saveMedicalHistory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, data);
  }

  // Fetch medical history by user email
  getMedicalHistory(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get?email=${email}`);
  }

}
