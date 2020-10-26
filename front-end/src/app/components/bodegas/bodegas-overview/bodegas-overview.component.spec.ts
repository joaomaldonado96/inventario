import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegasOverviewComponent } from './bodegas-overview.component';

describe('BodegasOverviewComponent', () => {
  let component: BodegasOverviewComponent;
  let fixture: ComponentFixture<BodegasOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegasOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegasOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
