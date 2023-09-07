import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireRestorationComponent } from './fire-restoration.component';

describe('FireRestorationComponent', () => {
  let component: FireRestorationComponent;
  let fixture: ComponentFixture<FireRestorationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FireRestorationComponent]
    });
    fixture = TestBed.createComponent(FireRestorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
