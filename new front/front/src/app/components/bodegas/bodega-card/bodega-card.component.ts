import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodega-card',
  templateUrl: './bodega-card.component.html',
  styleUrls: ['./bodega-card.component.scss']
})
export class BodegaCardComponent implements OnInit {
  @Input() bodega: any;

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  goToBodega() {
    this.router.navigate(['bodegas', 'bodega']);
  }
}
