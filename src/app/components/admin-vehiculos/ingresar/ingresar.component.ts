import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent {

  vehiculo!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiculosService: VehiculosService,
    private router: Router,
    private fb: FormBuilder) {
    this.vehiculo = this.fb.group({
      codigo: '',
      placa: '',
      tipo_registro: 'Seleccione el registro',
      descripcion: '',
      precio: '',
      anticipo: '',
      id_usuario: ''
    });
  }

  getUserIdFromLocalStorage(): string | null {
    const userIdString = localStorage.getItem('id');
    return userIdString;
  }

  ngOnInit(): void {
    this.getUserIdFromLocalStorage();
  }

  onSubmit() {
    const data = this.vehiculo.value;
    console.log(data);
      this.vehiculosService.createVehiculo(data).subscribe(
        response => {
          console.log("Registrado: " + data);
          window.location.href = '/vehiculos';
        }, error => {
          console.log("Error: " + error)
        }
      );
  }

  volver() {
    this.router.navigate(['vehiculos']);
  }
}
