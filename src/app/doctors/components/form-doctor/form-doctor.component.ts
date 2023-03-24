import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorsService } from '../../services/doctors.service';
import { HospitalService } from '../../../hospitals/services/hospitals.service';
import { HospitalItem } from '../../../hospitals/interfaces/hospitals-item.interface';
import {MessageService} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { Medico, Hospital } from '../../interfaces/doctor-interface.interface';
import { tap } from 'rxjs';


@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styles: [
  ],
  providers: [MessageService]
})
export class FormDoctorComponent implements OnInit{


  constructor(
    private doctorsService: DoctorsService,
    private hospitalService:HospitalService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private activateRoute: ActivatedRoute
    ) {}

  public formDoctor: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    hospital: [null, [Validators.required]],
  })

  public currentDoctor:Medico | undefined
  public docImage!: {link: string, file: any, name:string}
  public hospitalsItem: HospitalItem[] = []
  public selectedHospital: string = ""
  public doctorImg: string = ""

  ngOnInit(): void {
    this.loadHospitals()
    
    this.activateRoute.params.subscribe( params => {

        params['id']? this.dataLoaded(params['id']): null;
  })
  }

  dataLoaded(id: string){
    this.doctorsService.getDoctorById(id).subscribe( doctor => 
      {
        this.currentDoctor = doctor.medico
        if(this.currentDoctor){
          this.doctorImg = `http://localhost:3000/api/upload/medicos/`+this.currentDoctor.img
      }else{
        return
      }
  
      let t = {
        nombre: this.currentDoctor!.nombre,
        hospital: {
          code: this.currentDoctor!.hospital._id
        }
      }
  
      this.formDoctor.setValue(t)
      }
      )
      

   
  
  }

  loadHospitals(){

    this.hospitalService.getHospitals()

    .subscribe( hospitalResponse => {
      let hospitales = hospitalResponse.hospitales
          hospitales.forEach( element => {
            this.hospitalsItem.push({ 'name': element.nombre, 'code': element._id})
          })
    } )
  
  }


  onUpload( event:any){
    const reader = new FileReader();

    reader.onload = (_event: any) => {
      this.docImage = {
        link: _event.target.result,
        file: event.currentFiles[0],
        name: event.currentFiles[0].name
      }
    }

    reader.readAsDataURL(event.currentFiles[0])
  }

  imgSave(id:string){
    this.doctorsService.saveImage( this.docImage.file, id ).subscribe(
      response => {
        console.log(response)
      }
    )
  }
  
  onSubmit(){

  const res = this.doctorsService.saveDoctor( this.formDoctor.value )
   res.subscribe( res => {
        console.log(res)
        if ( res.ok ){
          this.messageService.add({key:'key1', severity:'success', summary: 'Creado exitosamente' })
          if( this.docImage ){
            this.imgSave( res.medico._id )
          }
        }
    }) 
  }

  onUpdate(){

    const res = this.doctorsService.updateDoctor( this.formDoctor.value, this.currentDoctor!._id )
     res.subscribe( res => {
          console.log(res)
          if ( res.ok ){
            this.messageService.add({key:'key1', severity:'success', summary: 'Actualizado exitosamente' })
            if( this.docImage ){
              console.log( res )
              this.imgSave( res.medico._id )
            }
          }
      }) 
    }
  }


