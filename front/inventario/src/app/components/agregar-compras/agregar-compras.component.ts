import { ComprasService } from './../../services/compras.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-compras',
  templateUrl: './agregar-compras.component.html',
  styleUrls: ['./agregar-compras.component.scss']
})
export class AgregarComprasComponent implements OnInit {

  public comprasForm: FormGroup;
  constructor(public _comprasService: ComprasService,
              private fb: FormBuilder) {
            }

  ngOnInit() {
  }

}
