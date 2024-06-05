import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';
import { AuthService, CredencialI } from '../../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
titulo: string='Shammy Sport es una tienda de ropa informal para toda la familia';
parrafo: string='Ingresa con tu usuario y contraseña y conoce tus promociones';
user: string='Usuario';
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

onLogin() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    const credencial: CredencialI = { email, password };

    this.auth.logInWithEmailAndPassword(credencial)
      .then((userCredential: any) => {
        console.log('Usuario inició sesión exitosamente:', userCredential);
        // Redirigir al usuario después de iniciar sesión
        this.route.navigate(['/producto']);
      })
      .catch((error: any) => {
        console.error('Error al iniciar sesión:', error);
        // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
      });
  } else {
    console.log('Formulario inválido');
  }
}


}


