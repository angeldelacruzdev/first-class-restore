import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialCleanupComponent } from './industrial-cleanup.component';

describe('IndustrialCleanupComponent', () => {
  let component: IndustrialCleanupComponent;
  let fixture: ComponentFixture<IndustrialCleanupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndustrialCleanupComponent]
    });
    fixture = TestBed.createComponent(IndustrialCleanupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
