import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add product to cart when add to cart button is clicked', () => {
    // Arrange: Obtener el botón de agregar al carrito
    const addToCartButton = fixture.nativeElement.querySelector('.add-to-cart-button');

    // Simular un producto
    const product = { nombre: 'Jean azul hombre', precio: 90.00 };

    // Act: Simular un clic en el botón de agregar al carrito
    addToCartButton.click();

    // Assert: Verificar que se haya agregado un producto al carrito
    expect(component.carritoItems.length).toBe(1);
    expect(component.carritoItems[0]).toEqual(product);
  });
});
