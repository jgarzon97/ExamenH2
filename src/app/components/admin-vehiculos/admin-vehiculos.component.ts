import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-admin-vehiculos',
  templateUrl: './admin-vehiculos.component.html',
  styleUrls: ['./admin-vehiculos.component.css']
})
export class AdminVehiculosComponent {

  vehiculos: any[] = [];
  actualizacion: any;
  busqueda: string = '';

  constructor(private vehiculosService: VehiculosService, private router: Router) {
  }

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('rol');
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    } else {
      this.visualizar();
    }
  }

  visualizar() {
    this.vehiculosService.getVehiculos().subscribe(response => {
      this.vehiculos = response;
    }, error => {
      console.log(error);
    });
  }

  buscarVehiculos() {
    if (this.busqueda.trim() === '') {
      this.visualizar();
    } else {
      this.vehiculos = this.vehiculos.filter(vehiculo => vehiculo.placa.includes(this.busqueda));
    }
  }

  Eliminar(dato: number) {
    console.log(dato);
    this.vehiculosService.deleteVehiculo(dato).subscribe(response => {
      console.log('id=' + dato + ' ha sido eliminado');
      this.visualizar();
    }, error => { console.log(error); });
  }

  Modificar(idx: number) {
    this.router.navigate(['/registrar', idx]);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
