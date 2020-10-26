
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Router
import { AppRoutingModule } from './routes/app.routes';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './components/home/home.component';
import { BodegaService } from './services/bodega.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './components/root/app.component';
import { CatalogoComponent } from './components/productos/catalogo/catalogo.component';
import { EditarProductoComponent } from './components/productos/editar-producto/editar-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodegaCardComponent } from './components/bodegas/bodega-card/bodega-card.component';
import { BodegasOverviewComponent } from './components/bodegas/bodegas-overview/bodegas-overview.component';
import { BodegaOverviewComponent } from './components/bodega/bodega-overview/bodega-overview.component';
import { AgregarCompraComponent } from './components/compras/agregar-compra/agregar-compra.component';

// providers


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    CatalogoComponent,
    EditarProductoComponent,
    BodegaCardComponent,
    BodegasOverviewComponent,
    BodegaOverviewComponent,
    AgregarCompraComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    MatDatepickerModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [BodegaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
