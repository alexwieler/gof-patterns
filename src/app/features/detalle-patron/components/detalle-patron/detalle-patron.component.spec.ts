import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePatronComponent } from './detalle-patron.component';

describe('DetallePatronComponent', () => {
  let component: DetallePatronComponent;
  let fixture: ComponentFixture<DetallePatronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallePatronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallePatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
