import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductoCatalogoComponent } from './editar-producto-catalogo.component';

describe('EditarProductoCatalogoComponent', () => {
  let component: EditarProductoCatalogoComponent;
  let fixture: ComponentFixture<EditarProductoCatalogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarProductoCatalogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarProductoCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
