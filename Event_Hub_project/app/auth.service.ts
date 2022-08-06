import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService 
{

  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  public loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  public logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  public getToken() {
    return localStorage.getItem('token')
  }

  public loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
