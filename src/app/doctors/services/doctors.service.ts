import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../interfaces/doctor-interface.interface';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient ) { }

  public serviceUrl: string = 'http://localhost:3000/api/medicos'

  getDoctors(){

    const headers = new HttpHeaders()
    .set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDEwYjM1ZTEyNzZmNzYxNDE1M2E3YTUiLCJpYXQiOjE2NzkzNDExNDgsImV4cCI6MTY3OTM4NDM0OH0.zN-cBSb_PomiYeKQwEqF76Cv4tYF3L5Kyfe8JHNZez4')

    return this.http.get<Doctor>(this.serviceUrl, { headers });

  }
}
