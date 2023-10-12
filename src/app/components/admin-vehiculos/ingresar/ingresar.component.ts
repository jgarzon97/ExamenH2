import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})

export class IngresarComponent implements OnInit {
  vehiculo: FormGroup;
  activo: boolean = true;
  vehiculos: any;

  constructor(
    private vehiculosService: VehiculosService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.vehiculo = this.fb.group({
      codigo: '',
      placa: '',
      tipo_registro: '',
      descripcion: '',
      precio: '',
      anticipo: 0,
      id_usuario: ''
    });

    if (this.activatedRoute.snapshot.params['id_vehiculo'] !== undefined) {
      this.activo = false;
      const id = this.activatedRoute.snapshot.params['id_vehiculo'];
      console.log('ID del vehículo a editar: ' + id);
      this.vehiculosService.getVehiculo(id).subscribe(vehiculo => {
        this.vehiculo.patchValue(vehiculo);
      });
    } else this.activo = true;
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
    if (!this.activo) {
      this.vehiculosService.updateVehiculo(data.id_vehiculo, data).subscribe(
        response => {
          console.log("Modificado: " + JSON.stringify(data));
          this.router.navigate(['/admin/vehiculos']);
        },
        error => {
          console.error("Error: " + JSON.stringify(error));
        }
      );
    } else {
      this.vehiculosService.createVehiculo(data).subscribe(
        response => {
          console.log("Registrado: " + JSON.stringify(data));
          this.router.navigate(['/admin/vehiculos']);
        },
        error => {
          console.error("Error: " + JSON.stringify(error));
        }
      );
    }
  }
}
