import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private router: Router)
  {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  Ingresar() {
    if (this.form.valid) {
      const email = this.form.value.email;
      const pass = this.form.value.pass;

      const url = 'http://localhost:3000/iniciarSesion';
      const datosIngreso = {
        email: email,
        pass: pass
      };

      axios.post(url, datosIngreso)
        .then((response) => {
          // Verifica si el estado es "Activo"
          if (response.data.estado === 'Activo') {
            // Almacena en el local storage, maneja la respuesta y Autenticación exitosa
            localStorage.setItem('rol', response.data.id_rol);
            localStorage.setItem('id', response.data.id_usuario);
            localStorage.setItem('estado', response.data.estado);
            localStorage.setItem('nombre', response.data.nombre);
            localStorage.setItem('apellido', response.data.apellido);
            this.fakeloading();
            alert('Ingreso exitoso.');
          } else {
            this.form.reset();
          }
        })
        .catch((error) => {
          alert('Error en el Ingreso.');
          this.form.reset();
        });
    }
  }

  fakeloading() {
    const rol = localStorage.getItem('rol');
    this.loading = true;
    setTimeout(() => {
      if (rol === '1') {
        this.router.navigate(['admin/vehiculos']);
      } else {
        this.router.navigate(['inv/vehiculos']);
      }
    }, 1500);
  }
}
