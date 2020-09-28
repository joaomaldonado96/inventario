import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Bodega4Service } from './../../services/bodega4.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-producto-catalogo',
  templateUrl: './editar-producto-catalogo.component.html',
  styleUrls: ['./editar-producto-catalogo.component.scss']
})
export class EditarProductoCatalogoComponent implements OnInit {
 public id: any;
 public edito: any;
 public producto: {
  referencia: '',
  tamano: 0,
  precioUnit: 0
 };
public form: FormGroup;

  constructor( public _bodegaService: Bodega4Service,
               private activateRoute: ActivatedRoute,
               private router: Router,
               private fb: FormBuilder) {
                this.form = this.fb.group({
                  referencia: new FormControl('', Validators.required),
                  tamano : new FormControl( Number , Validators.required),
                  precioUnit : new FormControl(Number , Validators.required)
                });
                }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.id = params['id'];
      this._bodegaService.getProducto(params['id']).subscribe(
        res => {
          this.producto = res.result[0];
          console.log(this.producto);
          this.form.setValue({
            referencia: this.producto.referencia,
            tamano: this.producto.tamano,
            precioUnit: this.producto.precioUnit
          });
      }, e => {
        console.log(e);
      });
        });
  }

  volver() {
    console.log(this.id);
    this.router.navigate(['ver-catalogo']);
  }

  editarProducto() {
    console.log(this.form.value);
    this._bodegaService.putProducto(this.form.value, this.id).subscribe(
      res => {
        console.log(res);
        this.edito = 1;
      },
        e => {
          console.log(e);
          this.edito = 0;
        }
    );

  }

}
