
  // tslint:disable
export class Compra {
  _id?: string;
  bodega?: string;
  proveedor?: string;
  costoEnvio?: number;
  descuento?: number;
  impuestos?: number;
  fechaCompra?: Date;
  fechaEntrega?: Date;
  productos?: any[];
  subTotal?: number;
  total: number;
}
