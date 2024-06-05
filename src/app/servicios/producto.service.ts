import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({ 
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = 'http://localhost:3000/productos';

  private carrito: Producto[] = [];
  private carritoSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  constructor(private http: HttpClient) { }

  getProducto(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  getCarrito(): Observable<Producto[]> {
    return this.carritoSubject.asObservable();
  }

  addProducto(producto: Producto): void {
    this.carrito.push(producto);
    this.carritoSubject.next(this.carrito);
  }

  removeProducto(producto: Producto): void {
    this.carrito = this.carrito.filter(p => p._id !== producto._id);
    this.carritoSubject.next(this.carrito);
  }

  clearCarrito(): void {
    this.carrito = [];
    this.carritoSubject.next(this.carrito);
  }
}
