import { Bodega4Service } from './../../services/bodega4.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  form: FormGroup;
  agrego = 2;

  constructor(public _bodegaService: Bodega4Service,
              private fb: FormBuilder) {

                this.form = this.fb.group({
                  referencia: new FormControl('', Validators.required),
                  tamano : new FormControl( Number , Validators.required),
                  precioUnit : new FormControl( Number , Validators.required)
                });
              }

  ngOnInit() {
  }

  crear() {
  console.log(this.form.value);
    this._bodegaService.addProducto(this.form.value).subscribe(
      res => {
        console.log(res.result);
        this.agrego = 1;
      },
        e => {
          console.log(e);
          this.agrego = 0;
        }
    );
  }

  imprimir() {
  console.log(this.form.value);
  }

  recargar() {
    window.location.reload();
  }
}
