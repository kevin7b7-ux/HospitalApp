import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor, Medico } from '../interfaces/doctor-interface.interface';
import { env } from '../../environments/environment'
import { DoctorPost } from '../interfaces/doctor-post.interface';
import { ImageResponse } from '../interfaces/image-response.interface';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http: HttpClient ) { }

  public serviceUrl: string = 'http://localhost:3000/api/medicos'
  public serviceUpload: string = 'http://localhost:3000/api/upload/medicos'

  getDoctors(){

    const headers = new HttpHeaders()
    .set('x-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NDEwYjM1ZTEyNzZmNzYxNDE1M2E3YTUiLCJpYXQiOjE2Nzk0MjI1NTgsImV4cCI6MTY3OTQ2NTc1OH0.cvgIChkBxs3QZguZbjyyqHcKBx0X8hTXuXR_oPPQD68')

    return this.http.get<Doctor>(this.serviceUrl, { headers });

  }

  getDoctorById( id: string ){
    const headers = new HttpHeaders()
    .set('x-token', env.jwtToken)
    return this.http.get<DoctorPost>(`${this.serviceUrl}/edit/${id}`, { headers })
  }

  saveDoctor( data: Medico ){
    const newDoctor = { 'nombre':data.nombre, 'hospital':data.hospital.code}
    const headers = new HttpHeaders()
    .set('x-token', env.jwtToken )
   return this.http.post<DoctorPost>(this.serviceUrl, newDoctor, { headers })
  }

  saveImage( file:any, id: string){
    const formData = new FormData()
    formData.append('imagen', file)
    const headers = new HttpHeaders()
    .set('x-token', env.jwtToken)
    return this.http.put<ImageResponse>(`${this.serviceUpload}/${ id }`, formData, { headers })
  }

  updateDoctor( data: Medico, id:string ){
    const upDoctor = { 'nombre':data.nombre, 'hospital':data.hospital.code}
    const headers = new HttpHeaders()
    .set('x-token', env.jwtToken)
    return this.http.put<DoctorPost>(`${this.serviceUrl}/${id}`, upDoctor, { headers })
  }

}
