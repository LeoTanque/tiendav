import { Component } from '@angular/core';
import { Producto, ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] = [];
imageUrl: any;

  constructor(private productoService: ProductosService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe((data) => {
      this.productos = data;
      console.log(data)
    });
  }

  addProducto() {
    const newProducto: Producto = {
      nombre: 'Nuevo Producto',
      precio: 100,
      descripcion: 'Descripción del producto',
      imageUrl: undefined,
      id: ''
    };
    this.productoService.addProducto(newProducto).then(() => {
      console.log('Producto añadido');
    });
  }

  updateProducto(producto: Producto) {
    producto.nombre = 'Producto Actualizado';
    this.productoService.updateProducto(producto).then(() => {
      console.log('Producto actualizado');
    });
  }

  deleteProducto(id: string) {
    this.productoService.deleteProducto(id).then(() => {
      console.log('Producto eliminado');
    });
  }
}
