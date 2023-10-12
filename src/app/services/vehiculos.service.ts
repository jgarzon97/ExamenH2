import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Obtener lista de Vehiculos
  getVehiculos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vehiculos`);
  }

  // Buscar por ID de Vehiculo
  getVehiculo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/vehiculo/${id}`);
  }

  // Crear un Vehiculo
  createVehiculo(vehiculoData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/vehiculo`, vehiculoData);
  }

  // Actualizar un Vehiculo
  updateVehiculo(id: number, vehiculoData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/vehiculo/${id}`, vehiculoData);
  }

  // Borrar un Vehiculo
  deleteVehiculo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/vehiculo/${id}`);
  }
}
