import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodegaOverviewComponent } from '../components/bodega/bodega-overview/bodega-overview.component';
import { BodegasOverviewComponent } from '../components/bodegas/bodegas-overview/bodegas-overview.component';
import { AgregarCompraComponent } from '../components/compras/agregar-compra/agregar-compra.component';
import { HomeComponent } from '../components/home/home.component';
import { CatalogoComponent } from '../components/productos/catalogo/catalogo.component';
import { EditarProductoComponent } from '../components/productos/editar-producto/editar-producto.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'catalogo', component: CatalogoComponent, },
    { path: 'bodegas', component: BodegasOverviewComponent },
    { path: 'bodegas/bodega', component: BodegaOverviewComponent },
    { path: 'compras/agregar', component: AgregarCompraComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
