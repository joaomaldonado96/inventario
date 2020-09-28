import { AgregarComprasComponent } from './components/agregar-compras/agregar-compras.component';
import { VerHistorialComprasComponent } from './components/ver-historial-compras/ver-historial-compras.component';
import { EditarProductoCatalogoComponent } from './components/editar-producto-catalogo/editar-producto-catalogo.component';
import { VerCatalogoComponent } from './components/ver-catalogo/ver-catalogo.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { VerInventarioComponent } from './components/ver-inventario/ver-inventario.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'ver-inventario', component: VerInventarioComponent },
    { path: 'agregar-producto', component: AgregarProductoComponent },
    { path: 'ver-catalogo', component: VerCatalogoComponent },
    { path: 'editar-producto-catalogo/:id', component: EditarProductoCatalogoComponent},
    { path: 'ver-historial-compras', component: VerHistorialComprasComponent},
    { path: 'agregar-compras', component: AgregarComprasComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'  },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
