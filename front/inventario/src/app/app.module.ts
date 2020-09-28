import { ComprasService } from './services/compras.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { VerInventarioComponent } from './components/ver-inventario/ver-inventario.component';
import { Bodega4Service } from './services/bodega4.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VerCatalogoComponent } from './components/ver-catalogo/ver-catalogo.component';
import { EditarProductoCatalogoComponent } from './components/editar-producto-catalogo/editar-producto-catalogo.component';
import { VerHistorialComprasComponent } from './components/ver-historial-compras/ver-historial-compras.component';
import { AgregarComprasComponent } from './components/agregar-compras/agregar-compras.component';

// providers


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    VerInventarioComponent,
    AgregarProductoComponent,
    VerCatalogoComponent,
    EditarProductoCatalogoComponent,
    VerHistorialComprasComponent,
    AgregarComprasComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    APP_ROUTING
  ],
  providers: [Bodega4Service, ComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
