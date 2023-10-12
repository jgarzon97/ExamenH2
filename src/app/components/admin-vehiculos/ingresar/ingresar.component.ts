import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent {

  vehiculo!: FormGroup;

  constructor(
    private vehiculosService: VehiculosService,
    private router: Router,
    private fb: FormBuilder) {
    this.vehiculo = this.fb.group({
      codigo: '',
      placa: '',
      tipo_registro: '',
      descripcion: '',
      precio: '',
      anticipo: 0,
      id_usuario: ''
    });
  }

  getUserIdFromLocalStorage(): string | null {
    const userIdString = localStorage.getItem('id');
    return userIdString;
  }

  ngOnInit(): void {
    const userId = this.getUserIdFromLocalStorage();
    if (userId) {
      this.vehiculo.get('id_usuario')?.setValue(userId);
    }
  }

  onSubmit() {
    const data = this.vehiculo.value;
    console.log(data);
    this.vehiculosService.createVehiculo(data).subscribe(
      response => {
        window.location.href = '/admin/vehiculos';
      }, error => {
        console.log("Error: " + error)
      }
    );
  }
}
