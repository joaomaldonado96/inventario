import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHistorialComprasComponent } from './ver-historial-compras.component';

describe('VerHistorialComprasComponent', () => {
  let component: VerHistorialComprasComponent;
  let fixture: ComponentFixture<VerHistorialComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerHistorialComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerHistorialComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
