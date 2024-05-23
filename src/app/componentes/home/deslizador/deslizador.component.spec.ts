import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslizadorComponent } from './deslizador.component';

describe('DeslizadorComponent', () => {
  let component: DeslizadorComponent;
  let fixture: ComponentFixture<DeslizadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeslizadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeslizadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
