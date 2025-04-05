import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlWorkspaceComponent } from './uml-workspace.component';

describe('UmlWorkspaceComponent', () => {
  let component: UmlWorkspaceComponent;
  let fixture: ComponentFixture<UmlWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmlWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
