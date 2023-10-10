import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvVehiculosComponent } from './inv-vehiculos.component';

describe('InvVehiculosComponent', () => {
  let component: InvVehiculosComponent;
  let fixture: ComponentFixture<InvVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvVehiculosComponent]
    });
    fixture = TestBed.createComponent(InvVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
