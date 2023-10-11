import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-inv-vehiculos',
  templateUrl: './inv-vehiculos.component.html',
  styleUrls: ['./inv-vehiculos.component.css']
})
export class InvVehiculosComponent {

  vehiculos: any[] = [];
  actualizacion: any;
  busqueda: string = '';

  constructor(private vehiculosService: VehiculosService, private router: Router) {}

  ngOnInit(): void {
    const isAuthenticated = localStorage.getItem('rol');
    if (!isAuthenticated) {
      console.log('No puedes ingresar, Inicia sesión');
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

  logout() {
    this.router.navigate(['/login']);
  }
}
