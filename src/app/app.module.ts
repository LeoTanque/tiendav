import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SigninComponent } from './componentes/auth/signin/signin.component';
import { SignupComponent } from './componentes/auth/signup/signup.component';
import { TipoproductoPipe } from './tipoproducto.pipe';
import { DeslizadorComponent } from './componentes/home/deslizador/deslizador.component';
import { register } from 'swiper/element/bundle';
import { ProductListComponent } from './componentes/product-list/product-list.component';
import { ProductoItemComponent } from './componentes/producto-item/producto-item.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { MetodoPagoComponent } from './componentes/metodo-pago/metodo-pago.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

register();

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    TipoproductoPipe,
    DeslizadorComponent,
    ProductListComponent,
    ProductoItemComponent,
    ProductoComponent,
    MetodoPagoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"tienda-auth-2b051","appId":"1:223222294121:web:a3d2cfb7f7488e35fd24f8","storageBucket":"tienda-auth-2b051.appspot.com","apiKey":"AIzaSyBPEj2XZyCMRYgUHioXgyQVDl_cVsht7qc","authDomain":"tienda-auth-2b051.firebaseapp.com","messagingSenderId":"223222294121"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
