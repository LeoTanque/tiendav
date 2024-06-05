import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { AuthService, CredencialI } from '../../../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
titulo: string='Shammy Sport es una tienda de ropa informal para toda la familia';
parrafo: string='Ingresa con tu usuario y contraseña y conoce tus promociones';
user: string='Email';
pass: string='Contraseña'
parrafo2: string='Tus datos estan siendo protegidos'


loginForm!: FormGroup;

constructor(private formBuilder: FormBuilder, private auth: AuthService, private route: Router) {
  this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}

ngOnInit(): void {}

onLogin1() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    const credencial: CredencialI = { email, password };

    this.auth.logInWithEmailAndPassword(credencial)
      .then((userCredential: any) => {
        console.log('Usuario inició sesión exitosamente:', userCredential);
        // Redirigir al usuario después de iniciar sesión
        this.route.navigate(['']);
      })
      .catch((error: any) => {
        console.error('Error al iniciar sesión:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      });
  } else {
    console.log('Formulario inválido');
  }
}

onLogin() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    const credencial: CredencialI = { email, password };

    this.auth.logInWithEmailAndPassword(credencial)
      .then((userCredential: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: 'Usuario inició sesión exitosamente',
        });
         console.log('Usuario inició sesión exitosamente:', userCredential);
        this.route.navigate(['']);
      })
      .catch((error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al iniciar sesión: ' + error.message,
        });
      });
  } else {
    this.showValidationErrors();
  }
}

showValidationErrors() {
  if (this.email?.invalid) {
    this.showEmailErrors();
  } else if (this.password?.invalid) {
    this.showPasswordErrors();
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Formulario inválido',
      text: 'Por favor, corrige los errores en el formulario',
    });
  }
}

showEmailErrors() {
  if (this.email?.errors?.['required']) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: 'El correo es obligatorio',
    });
  } else if (this.email?.errors?.['email']) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: 'Correo no válido',
    });
  }
}

showPasswordErrors() {
  if (this.password?.errors?.['required']) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: 'La contraseña es obligatoria',
    });
  } else if (this.password?.errors?.['minlength']) {
    Swal.fire({
      icon: 'error',
      title: 'Error en el inicio de sesión',
      text: 'La contraseña debe tener al menos 6 caracteres',
    });
  }
}

get email() {
  return this.loginForm.get('email');
}

get password() {
  return this.loginForm.get('password');
}

}


