import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdorControlComponent } from './odor-control.component';

describe('OdorControlComponent', () => {
  let component: OdorControlComponent;
  let fixture: ComponentFixture<OdorControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OdorControlComponent]
    });
    fixture = TestBed.createComponent(OdorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
