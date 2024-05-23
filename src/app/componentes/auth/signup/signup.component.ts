import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  titulo: string='Shammy Sport es una tienda de ropa informal para toda la familia';
  parrafo: string='Registrate para conocer promociones, descuentos especiales y mucho mas';
  register: string='Registrarse';
  name: string='Nombre completo';
  email: string='Correo Electronico'
  user: string='Usuario';
  pass: string='Contraseña';
  confirmpass: string='Confirmar Contraseña'
  parrafo2: string='Tus datos estan siendo protegidos';
}
