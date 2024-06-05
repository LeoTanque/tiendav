import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordsMatchValidator } from '../../../servicios/passwordsMatchValidator';
import { AuthService, CredencialI } from '../../../servicios/auth.service';
import { Router } from '@angular/router';

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
      console.log(this.signupForm.value);
     
    }else{
      console.log('invalid')
    }
  }

  onSubmit() {
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

}
