import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioRecoveryComponent } from './bio-recovery.component';

describe('BioRecoveryComponent', () => {
  let component: BioRecoveryComponent;
  let fixture: ComponentFixture<BioRecoveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioRecoveryComponent]
    });
    fixture = TestBed.createComponent(BioRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
