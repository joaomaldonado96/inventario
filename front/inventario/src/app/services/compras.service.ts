import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  public url: string;
  public headers: Headers;

  constructor(public _http: Http) {
    console.log('Hello Bodega4Service Service');
    this.url = 'http://localhost:3000/api/';
   }

   addCompra(compra: any) {
    const json = JSON.stringify(compra);
    const params = json;
    this.headers = new Headers({'Content-Type': 'application/json'});
    console.log('agregando compra');
    console.log(params);
    return this._http.post(this.url + 'compra', params, {headers: this.headers})
            .map(res => res.json());
  }

  addCompraPro(compra: any) {
    const json = JSON.stringify(compra);
    const params = json;
    this.headers = new Headers({'Content-Type': 'application/json'});
    console.log('agregando compra');
    console.log(params);
    return this._http.post(this.url + 'compraPro', params, {headers: this.headers})
            .map(res => res.json());
  }

  getIdCompra() {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `idcompra` ).map((res: any) => res.json());
   }

   getproductos() {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `productos` ).map((res: any) => res.json());
   }

   getProductoBodega(index: number) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `bodega_producto/${index}` ).map((res: any) => res.json());
  }

}
