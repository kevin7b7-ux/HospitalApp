import { Component, OnInit, inject } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { Medico } from '../../interfaces/doctor-interface.interface';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styles: [
  ]
})
export class ListDoctorsComponent implements OnInit{


 constructor(
  private doctorsService: DoctorsService,
  ) {}

 public doctors: Medico[] = [];


ngOnInit(): void {
 
  this.listDoctors();
}

listDoctors(){

  this.doctorsService.getDoctors()
  .subscribe(
    res => {
      this.doctors = res.medicos;
    }
  )
}

}
