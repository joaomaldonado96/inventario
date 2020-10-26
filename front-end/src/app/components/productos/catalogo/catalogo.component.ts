import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Producto } from 'src/app/classes/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  public productos: any;
  public producto: any;
  public editar = false;
  public productoSeleccionado = new FormControl();
  public productosFiltrados: any[];
  constructor(private productoService: ProductoService) {}

  async ngOnInit() {
    this.productos =  await this.productoService.getProductos();
    this.productosFiltrados = this.productos;
    this.productoSeleccionado.valueChanges.subscribe(value => {
      const filterValue = this._normalizeValue(value);
      this.productosFiltrados = this.productos.filter( producto => this._normalizeValue(producto.referencia).includes(filterValue));
    });
  }

  actualizarProducto(producto: any) {
    this.producto = producto;
    this.editar = true;
  }

  private _normalizeValue(value: any): any {
    return value.toLowerCase().replace(/\s/g, '');
  }

  productoAcualizado( ) {
    this.producto = undefined;
    this.editar = false;
  }

  async productoGuardado() {
    this.producto = undefined;
    this.editar = false;
    this.productos =  await this.productoService.getProductos();
    this.productosFiltrados = this.productos;
  }

  guardarProducto() {
    this.producto = new Producto();
    this.editar = true;
  }
}
