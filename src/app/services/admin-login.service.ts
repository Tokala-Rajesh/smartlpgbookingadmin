import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Admin} from "../common/admin";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
// userName: string;
// password: string;
  private baseUrl = 'http://localhost:8081/api/v1';
  constructor(private http: HttpClient) { }
  loginUser(admin:Admin):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}`+'/login', admin);
  }
}
