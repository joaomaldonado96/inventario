import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.scss']
})
export class EditarProductoComponent implements OnInit {
  @Input() producto: any;
  @Output() guardado: EventEmitter<any>;
  @Output() actualizado: EventEmitter<any>;

  constructor(private productoService: ProductoService) {
    this.guardado = new EventEmitter();
    this.actualizado = new EventEmitter();
   }

  ngOnInit() {
  }

  async guardarProducto() {
    if (this.producto._id) {
      await this.productoService.actualizarProducto(this.producto);
      this.producto = undefined;
      this.actualizado.emit(true);
    } else {
      await this.productoService.guardarProducto(this.producto);
      this.producto = undefined;
      this.guardado.emit(true);
    }
  }

}
