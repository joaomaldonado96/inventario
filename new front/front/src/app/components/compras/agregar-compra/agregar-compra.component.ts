import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { Compra } from 'src/app/classes/compra';
import { ProductoCompra } from 'src/app/classes/productoCompra';
import { BodegaService } from 'src/app/services/bodega.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-agregar-compra',
  templateUrl: './agregar-compra.component.html',
  styleUrls: ['./agregar-compra.component.sass']
})
export class AgregarCompraComponent implements OnInit {

  public bodegas: any[];
  public proveedores: any[];
  public productos: any[];
  public compra: Compra;
  public total = 0;
  public subtotal = 0;
  public bodega: any;
  public productoParaAgregar: ProductoCompra;
  constructor(private bodegaService: BodegaService,
              private proveedorService: ProveedorService,
              private productoService: ProductoService) {
                this.compra = new Compra();
              }

  async ngOnInit() {
    [this.bodegas, this.proveedores, this.productos] = await Promise.all([ this.bodegaService.getBodegas(),
        this.proveedorService.getProveedores(),  this.productoService.getProductos()]);
    this.compra.productos = [];
  }

  print(): void{
    console.log(this.productoParaAgregar);
  }

  agregarProducto(): void{
    this.productoParaAgregar = new ProductoCompra();
  }

  seleccionarProducto(producto: any): void{
    this.productoParaAgregar.referencia = producto.referencia;
    this.productoParaAgregar.tamano = producto.tamano;
    this.productoParaAgregar.precioUnitario = producto.precioUnitario;
    console.log(this.productoParaAgregar);
  }

  seleccionarBodega(bodega: any): void{
    this.bodega = bodega;
  }

  guardarProducto(): void{
    this.productoParaAgregar.total = (this.productoParaAgregar.cantidadPedida -
       this.productoParaAgregar.unidadesMal - this.productoParaAgregar.unidadesNoEntrega ) * this.productoParaAgregar.precioUnitario;
    this.compra.productos.push(this.productoParaAgregar);
    this.productoParaAgregar = undefined;
    this.sumaTotal();
  }

  sumaTotal(): void{
    let totalProductos = 0;
    for ( const producto of this.compra.productos) {
      totalProductos += producto.total;
    }
    this.subtotal = totalProductos + this.compra.costoEnvio - this.compra.descuento ;
    this.total = this.subtotal + this.compra.impuestos;
  }

  guardarCompra(): void{
    for ( const producto of this.compra.productos) {
      const productoGuardado = this.bodega.productos.find( e => e.producto === producto._id);
      const disponibles = producto.cantidadPedida - producto.unidadesMal - producto.unidadesNoEntrega;
      if (productoGuardado){
        productoGuardado.disponibles += disponibles;
        productoGuardado.malas +=  producto.unidadesMal;
      }else{
        this.bodega.productos.push({
          producto: producto._id,
          disponibles,
          malas: producto.unidadesMal
        });
      }
    }
    this.compra.subTotal = this.subtotal;
    this.compra.total =  this.total;
    console.log('compra', this.compra);
    console.log('bodega', this.bodega);
  }
}
