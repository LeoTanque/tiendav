import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './componentes/auth/signin/signin.component';
import { SignupComponent } from './componentes/auth/signup/signup.component';
import { HomeComponent } from './componentes/home/home.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

const routes: Routes = [
  {path: 'signin', redirectTo:'signin', pathMatch:'full'},
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'carrito', component: CarritoComponent},
  //{path: 'producto', component: ProductoComponent},
  {path: 'list', component: ProductListComponent},
 // {path:'lista', component:ListaProductosComponent},
  {path: 'producto/:id', component: ProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
