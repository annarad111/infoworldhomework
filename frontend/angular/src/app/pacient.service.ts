import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pacient } from '../app/pacient';

@Injectable({
  providedIn: 'root',
})
export class PacientService {
  constructor(private http: HttpClient) { }

  rootURL = 'http://localhost:9999/';

  getPacients() {
    return this.http.get(this.rootURL + '/pacients');
  }

  // addUser(user: any) {
  //   return this.http.post(this.rootURL + '/user', {user});
  // }
}