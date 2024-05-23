import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { merge } from 'rxjs';

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


login(){
  console.log("Envio de datos ")
}


}


