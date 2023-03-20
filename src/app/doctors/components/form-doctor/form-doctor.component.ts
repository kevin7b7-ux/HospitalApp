import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorsService } from '../../services/doctors.service';


@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styles: [
  ]
})
export class FormDoctorComponent {


  constructor(
    private doctorsService: DoctorsService,
    private fb: FormBuilder,
    ) {}

  public formDoctor: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    hospital: ['', [Validators.required]],
    img: ['', ]
  })

  public hospitals = [
    { name: 'Valle', code: '15678'},
    { name: 'Valle 1', code: '15679'},
    { name: 'Valle 2', code: '15676'},
    { name: 'Valle 3', code: '15648'},
  ]

}
