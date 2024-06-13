// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   private apiUrl = 'http://127.0.0.1:5000/api/chat';  // API URL

//   constructor(private http: HttpClient) {}

//   sendMessage(message: string): Observable<any> {
//     return this.http.post<any>(this.apiUrl, { message });
//   }
// }
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  sendMessage(message: string): Observable<any> {
    // Simuliere eine Antwort mit Dummy-Daten
    const response = { response: `Dies ist eine Dummy-Antwort auf: "${message}"` };
    return of(response);
  }
}
