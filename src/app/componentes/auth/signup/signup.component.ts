import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../../../servicios/passwordsMatchValidator';
import { AuthService, CredencialI } from '../../../servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  titulo: string='Shammy Sport es una tienda de ropa informal para toda la familia';
  parrafo: string='Registrate para conocer promociones, descuentos especiales y mucho mas';
  register: string='Registrarse';
  name: string='Nombre completo';
  correo: string='Correo Electronico'
  usuario: string='Usuario';
  pass: string='Contraseña';
  confirmpass: string='Confirmar Contraseña'
  parrafo2: string='Tus datos estan siendo protegidos';
  signupForm!: FormGroup;

    constructor(private formBuilder: FormBuilder, private auth:AuthService, private route: Router) {
    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      user: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: passwordsMatchValidator('password', 'confirmPassword')});
  }

  ngOnInit(): void {
   
  }
 

  get fullName() {
    return this.signupForm.get('fullName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get user() {
    return this.signupForm.get('user');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

 

  onSubmit1() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      const credencial: CredencialI = { email, password };

      this.auth.signUpWithEmailAndpassword(credencial)
        .then(userCredential => {
          console.log('Usuario registrado exitosamente:', userCredential);
          // Redirigir al usuario después de registrarse
          this.route.navigate(['/signin']);
        })
        .catch(error => {
          console.error('Error al registrar usuario:', error);
          // Manejo de errores, por ejemplo, mostrar un mensaje al usuario
        });
    } else {
      console.log('Formulario inválido');
    }
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const { email, password } = this.signupForm.value;
      const credencial: CredencialI = { email, password };

      this.auth.signUpWithEmailAndpassword(credencial)
        .then(userCredential => {
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Usuario registrado exitosamente',
          });
          this.route.navigate(['/signin']);
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al registrar usuario: ' + error.message,
          });
        });
    } else {
      this.showValidationErrors();
    }
  }

  showValidationErrors() {
    if (this.fullName?.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'El nombre es obligatorio',
      });
    } else if (this.email?.invalid) {
      this.showEmailErrors();
    } else if (this.user?.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'El usuario es obligatorio',
      });
    } else if (this.password?.invalid) {
      this.showPasswordErrors();
    } else if (this.confirmPassword?.invalid || this.signupForm.errors?.['passwordsNotMatch']) {
      this.showConfirmPasswordErrors();
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
        title: 'Error en el registro',
        text: 'El correo es obligatorio',
      });
    } else if (this.email?.errors?.['email']) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Correo no válido',
      });
    }
  }

  showPasswordErrors() {
    if (this.password?.errors?.['required']) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'La contraseña es obligatoria',
      });
    } else if (this.password?.errors?.['minlength']) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'La contraseña debe tener al menos 6 caracteres',
      });
    }
  }

  showConfirmPasswordErrors() {
    if (this.confirmPassword?.errors?.['required']) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Confirmar contraseña es obligatorio',
      });
    } else if (this.signupForm.errors?.['passwordsNotMatch']) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el registro',
        text: 'Las contraseñas no coinciden',
      });
    }
  }

}
