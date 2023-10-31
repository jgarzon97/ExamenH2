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
  vehiculos: any;
  activo: boolean = true;

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

    const vehiculoId = this.activatedRoute.snapshot.params['id_vehiculo'];

    if (vehiculoId !== undefined) {
      this.activo = false; // Modo edición
      console.log('ID del vehículo a editar: ' + vehiculoId);
      this.cargarDatosDelVehiculo(vehiculoId);
    } else {
      this.activo = true; // Modo registro
    }
  }

  cargarDatosDelVehiculo(vehiculoId: number) {
    this.vehiculosService.getVehiculo(vehiculoId).subscribe(
      (vehiculo: any[]) => {
        if (vehiculo.length > 0) {
          console.log("Datos del vehiculo: ", vehiculo);
          this.vehiculo.patchValue({
            codigo: vehiculo[0].codigo,
            placa: vehiculo[0].placa,
            tipo_registro: vehiculo[0].tipo_registro,
            descripcion: vehiculo[0].descripcion,
            precio: vehiculo[0].precio,
            anticipo: vehiculo[0].anticipo,
            id_usuario: vehiculo[0].id_usuario
          });
        }
      },
      error => {
        console.error("Error al cargar datos del vehículo: " + JSON.stringify(error));
      }
    );
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
    console.log("Estado de 'activo': " + this.activo);
  }

  onSubmit() {
    const data = this.vehiculo.value;
    const id_vehiculo = this.activatedRoute.snapshot.params['id_vehiculo'];

    if (!this.activo) {
      this.vehiculosService.updateVehiculo(id_vehiculo, data).subscribe(
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
