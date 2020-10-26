import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

   constructor(private httpClient: HttpClient) {
  }

  public getBodegas(): Promise<any> {
    const url = `${environment.backend.bodegas}todas/`;
    return this.httpClient.get<any>(url).toPromise();
  }

  getBodegaPorId(bodegaId: any) {
    const url = `${environment.backend.bodegas}porId/${bodegaId}`;
    return this.httpClient.get<any>(url).toPromise();
   }
}
