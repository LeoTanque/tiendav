import { Component, OnDestroy, OnInit } from '@angular/core';
import { Producto } from '../../modelos/producto';
import { ProductoService } from '../../servicios/producto.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
}) 
export class ProductListComponent implements OnInit, OnDestroy{

  producto: Producto[]=[];
  productoSub: Subscription | undefined;
  constructor(private productoServicio: ProductoService){}

  ngOnInit(): void {
      this.productoSub = this.productoServicio.getProducto()
      .subscribe ({
        next: (producto: Producto[]) => {
          this.producto = producto
          console.log(this.producto)
        },
        error: (err: any) => {
          console.error(err)
        },
        complete: () =>{
          console.log('completado')
        }
      })
  }

  ngOnDestroy(): void {
    this.productoSub?.unsubscribe();
  }
}
