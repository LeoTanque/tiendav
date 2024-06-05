  import { Component, OnDestroy, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';
  import { Subscription } from 'rxjs';
  import { Producto } from '../../modelos/producto';
  import { ProductoService } from '../../servicios/producto.service';

  @Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html',
    styleUrl: './producto.component.css'
  })
  export class ProductoComponent implements OnInit, OnDestroy{

    slug: string | undefined;
    producto: Producto | undefined;
    productoSub: Subscription | undefined; 

    galeria: Array<any> = [];
    renderGaleria: Boolean = true;
    currentImg: string | undefined;

    constructor(private route: ActivatedRoute, private productoService: ProductoService){}

    ngOnInit(): void {
        this.slug = this.route.snapshot.params['id']
        this.productoSub = this.productoService.getProducto()
        .subscribe({
          next: (productos: Producto[]) => {
            console.log('khgjg',productos)
            this.producto = productos.filter(p => p.slug === this.slug)[0]
            this.currentImg = this.producto.imageUrl[0]
            console.log('kkk',this.currentImg)
          },
          error: (err: any) => {
            console.error('Error', err)
          }
        })
    }

   

    
    ngOnDestroy(): void {
        this.productoSub?.unsubscribe();
    }

    handleChangeImg(itemImg: string){
      this.currentImg = itemImg;
    }


    agregarAlCarrito1() {
      if (this.producto) {
        console.log('Producto agregado al carrito:', this.producto);
        
      } else {
        console.log('No hay producto seleccionado.');
      }
    }

    agregarAlCarrito() {
      if (this.producto) {
        const productoConImagenSeleccionada = {
          ...this.producto,
          imagenSeleccionada: this.currentImg
        };
        console.log('Producto agregado al carrito:', productoConImagenSeleccionada.imagenSeleccionada);
      }else {
        console.log('No hay producto seleccionado.');
      }
    }

  }
