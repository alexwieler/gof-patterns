import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveWorkspaceComponent } from './interactive-workspace.component';

describe('InteractiveWorkspaceComponent', () => {
  let component: InteractiveWorkspaceComponent;
  let fixture: ComponentFixture<InteractiveWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveWorkspaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
