import { Bodega4Service } from './../../services/bodega4.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-catalogo',
  templateUrl: './ver-catalogo.component.html',
  styleUrls: ['./ver-catalogo.component.scss']
})
export class VerCatalogoComponent implements OnInit {

  public catalogo: any = [];
  public eliminar = 0;
  public eliminado = 0;

  constructor(public _bodegaService: Bodega4Service,
              public router: Router,
              ) { }

  ngOnInit() {
    console.log('entrando a ver catalogo');
    this._bodegaService.getCatalogo().subscribe(
      res => {
        this.catalogo = res.result;
        console.log(res.result);
    }, e => {
      console.log(e);
    });
  }

  eliminarProducto(id: any) {
    this._bodegaService.deleteProducto(id)
            .subscribe(
              res => {
                console.log(res);
                this.eliminado = 1;
                this.eliminar = 0;
              },
              e => {
                console.log(e);
                this.eliminar = 2;
              }
            );

  }

  recargar() {
    window.location.reload();
  }

  editarProducto( index: number  ) {
    this.router.navigate( ['/editar-producto-catalogo', index] );
  }
}
