  import { Component } from '@angular/core';

  @Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.css']
  })
  export class CarritoComponent {
    carritoItems: any[] = [];


    // Modificamos la función para que sea pública
    agregarAlCarrito(item: any) {
      this.carritoItems.push(item);
    }

    eliminarDelCarrito(index: number) {
      this.carritoItems.splice(index, 1);
    }

    vaciarCarrito() {
      this.carritoItems = [];
    }
  }