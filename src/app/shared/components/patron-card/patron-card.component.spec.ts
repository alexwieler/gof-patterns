import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronCardComponent } from './patron-card.component';

describe('PatronCardComponent', () => {
  let component: PatronCardComponent;
  let fixture: ComponentFixture<PatronCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatronCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
