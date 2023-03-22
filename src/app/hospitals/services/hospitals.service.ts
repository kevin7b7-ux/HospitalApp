import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HospitalResponse } from '../interfaces/Hospital';
import { env } from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class HospitalService {

constructor( private http: HttpClient ){}

public serviceUrl: string = 'http://localhost:3000/api/hospitales'

getHospitals(){

    const headers = new HttpHeaders()
    .set('x-token', env.jwtToken)
    return this.http.get<HospitalResponse>(this.serviceUrl, {headers})
}

}