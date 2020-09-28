import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class Bodega4Service {

  public id: any;
  public url: string;
  public headers: Headers;

  constructor(public _http: Http) {
    console.log('Hello Bodega4Service Service');
    this.url = 'http://localhost:3000/api/';
   }

   getInventario() {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `bodega` ).map((res: any) => res.json());
   }

   addProducto(producto: any) {
    const json = JSON.stringify(producto);
    const params = json;
    this.headers = new Headers({'Content-Type': 'application/json'});
    console.log('agregando producto');
    console.log(params);
    return this._http.post(this.url + 'producto', params, {headers: this.headers})
            .map(res => res.json());
  }

  getCatalogo() {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `productos` ).map((res: any) => res.json());
   }

   deleteProducto(id: any) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.delete(this.url + `producto/${id}` ).map((res: any) => res.json());
  }

  putProducto(producto: any, index: number) {
    console.log(producto);
    const json = JSON.stringify(producto);
    const params = json;
    return this._http.put(this.url + `producto/${index}`, params , { headers: this.headers } ).map(res => res.json());
  }

  setId(index: number) {
    this.id = index;
  }

  getProducto(index: number) {
    this.headers = new Headers({'Content-Type': 'application/json'});
    return this._http.get(this.url + `producto/${index}` ).map((res: any) => res.json());
  }
}
