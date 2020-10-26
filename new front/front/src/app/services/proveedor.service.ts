import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private httpClient: HttpClient) {
  }

  public getProveedores(): Promise<any> {
    const url = `${environment.backend.proveedores}todos`;
    return this.httpClient.get<any>(url).toPromise();
  }
}
