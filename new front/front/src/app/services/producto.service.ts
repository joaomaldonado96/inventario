import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient) {
  }

  public getProductos(): Promise<any> {
    const url = `${environment.backend.productos}todos`;
    return this.httpClient.get<any>(url).toPromise();
  }

  public actualizarProducto(producto: any): Promise<any> {
    const url = `${environment.backend.productos}${producto._id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<any>(url, producto, httpOptions).toPromise();
  }

  public guardarProducto(producto: any): Promise<any> {
    const url = `${environment.backend.productos}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<any>(url, producto, httpOptions).toPromise();
  }
}
