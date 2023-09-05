import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDamageComponent } from './water-damage.component';

describe('WaterDamageComponent', () => {
  let component: WaterDamageComponent;
  let fixture: ComponentFixture<WaterDamageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterDamageComponent]
    });
    fixture = TestBed.createComponent(WaterDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
