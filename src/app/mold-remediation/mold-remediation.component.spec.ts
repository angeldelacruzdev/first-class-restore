import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoldRemediationComponent } from './mold-remediation.component';

describe('MoldRemediationComponent', () => {
  let component: MoldRemediationComponent;
  let fixture: ComponentFixture<MoldRemediationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoldRemediationComponent]
    });
    fixture = TestBed.createComponent(MoldRemediationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
