import { Bodega4Service } from './../../services/bodega4.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-inventario',
  templateUrl: './ver-inventario.component.html',
  styleUrls: ['./ver-inventario.component.scss']
})
export class VerInventarioComponent implements OnInit {

public bodega: any = [];

  constructor(public _bodegaService: Bodega4Service) { }

  ngOnInit() {
    console.log('entrando a ver inventario');
    this._bodegaService.getInventario().subscribe(
      res => {
        this.bodega = res.result;
        console.log(res.result);
    }, e => {
      console.log(e);
    });
  }

}
