import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:3001/api/register";
  private _loginUrl = "http://localhost:3001/api/login";

  constructor( private http: HttpClient,
                private _router : Router) { }
  registerUser(user){
    return this.http.post<any>(this._registerUrl, user)
  }
  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }
  
  getToken(){
    return localStorage.getItem('token')
    this._router.navigate(['/events'])
  }

  logoutUser(){
    localStorage.removeItem('token')
  }
  // loginUser(user): Observable<any> {
  //   return this.http.post(`${this._loginUrl}`, user)
  //     .pipe(
  //       tap(result => {
  //         console.log('login():', result);
  //       }),
  //       catchError(this.handleError('login()'))
  //     );
  // }

  
  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     console.error(error);
  //     console.log(`${operation} failed: ${error.message}`);

  //     return of(result as T);
  //   };
  // }
}
