import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoiGraphComponent } from './roi-graph.component';

describe('RoiGraphComponent', () => {
  let component: RoiGraphComponent;
  let fixture: ComponentFixture<RoiGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoiGraphComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
