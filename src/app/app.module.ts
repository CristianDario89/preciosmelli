import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProvider } from './app.routing';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';

// service
import { ProductService } from './services/product.service';

// Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { RutasComponent } from './components/rutas/rutas.component';
import { ReciboComponent } from './components/recibo/recibo.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { GoogleMapsModule } from '@angular/google-maps';
import { LunesComponent } from './components/rutas/lunes/lunes.component';
import { MartesComponent } from './components/rutas/martes/martes.component';
import { MiercolesComponent } from './components/rutas/miercoles/miercoles.component';
import { JuevesComponent } from './components/rutas/jueves/jueves.component';
import { ViernesComponent } from './components/rutas/viernes/viernes.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';

import { SidebarModule } from 'ng-sidebar';
import { AlertasComponent } from './components/sidebar/alertas/alertas.component';
import { PrestamosComponent } from './components/sidebar/prestamos/prestamos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
 
import { HttpClientModule } from '@angular/common/http'; 

import { ClienteComponent } from './components/rutas/jueves/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    RutasComponent,
    ReciboComponent,
    LunesComponent,
    MartesComponent,
    MiercolesComponent,
    JuevesComponent,
    ViernesComponent,
    MensajeComponent,
    AlertasComponent,
    PrestamosComponent,
    SidebarComponent,
    ClienteComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    GoogleMapsModule,
    NgbModule,
    NgxSpinnerModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    SidebarModule.forRoot(),
    ToastrModule.forRoot(), 
    routing
  ],
  providers: [
    ProductService,
    appRoutingProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
