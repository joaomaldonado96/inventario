import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCatalogoComponent } from './ver-catalogo.component';

describe('VerCatalogoComponent', () => {
  let component: VerCatalogoComponent;
  let fixture: ComponentFixture<VerCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
