import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVehiculosComponent } from './admin-vehiculos.component';

describe('AdminVehiculosComponent', () => {
  let component: AdminVehiculosComponent;
  let fixture: ComponentFixture<AdminVehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVehiculosComponent]
    });
    fixture = TestBed.createComponent(AdminVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
