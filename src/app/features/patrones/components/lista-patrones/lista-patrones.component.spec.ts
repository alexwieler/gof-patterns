import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPatronesComponent } from './lista-patrones.component';

describe('ListaPatronesComponent', () => {
  let component: ListaPatronesComponent;
  let fixture: ComponentFixture<ListaPatronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPatronesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPatronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
