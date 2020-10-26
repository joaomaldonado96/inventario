import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaCardComponent } from './bodega-card.component';

describe('BodegaCardComponent', () => {
  let component: BodegaCardComponent;
  let fixture: ComponentFixture<BodegaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
