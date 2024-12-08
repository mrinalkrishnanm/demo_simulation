import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationWrapperComponent } from './simulation-wrapper.component';

describe('SimulationWrapperComponent', () => {
  let component: SimulationWrapperComponent;
  let fixture: ComponentFixture<SimulationWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulationWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimulationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
