import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegaOverviewComponent } from './bodega-overview.component';

describe('BodegaOverviewComponent', () => {
  let component: BodegaOverviewComponent;
  let fixture: ComponentFixture<BodegaOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegaOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
