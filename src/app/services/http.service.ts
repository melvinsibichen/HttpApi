import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUserDetails(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postDetails(userData: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/users", userData);
  }
}
