import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar componentes
import { RutasComponent } from './components/rutas/rutas.component';
import { ReciboComponent } from './components/recibo/recibo.component';

import { LunesComponent } from './components/rutas/lunes/lunes.component';
import { MartesComponent } from './components/rutas/martes/martes.component';
import { MiercolesComponent } from './components/rutas/miercoles/miercoles.component';
import { JuevesComponent } from './components/rutas/jueves/jueves.component';
import { ViernesComponent } from './components/rutas/viernes/viernes.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/products/product/product.component';

//import { SidebarModule } from 'ng-sidebar';
import { AlertasComponent } from './components/sidebar/alertas/alertas.component';
import { PrestamosComponent } from './components/sidebar/prestamos/prestamos.component';

import { ClienteComponent } from './components/rutas/jueves/cliente/cliente.component';
import { LoginComponent } from './components/login/login.component';

import {AuthGuard} from './guards/auth.guard';

import { ProductListComponent } from './components/products/product-list/product-list.component';
//array de rutas
const appRoutes: Routes = [ //pa q se cumplan los formato de angular
   /* {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},*/
    {path: '', component: ProductsComponent},
    {path: 'editado', component: ProductComponent, canActivate: [AuthGuard]},
    {path: 'rutas', component: RutasComponent},
    {path: 'recibo', component: ReciboComponent},
    {path: 'rutas/lunes', component: LunesComponent},
    {path: 'rutas/martes', component: MartesComponent},
    {path: 'rutas/miercoles', component: MiercolesComponent},
    {path: 'rutas/jueves', component: JuevesComponent},
    {path: 'rutas/viernes', component: ViernesComponent},

    {path: 'sidebar/prestamos', component: PrestamosComponent},
    {path: 'sidebar/alerta', component: AlertasComponent},
    {path: 'sidebar', component: ProductListComponent},

    {path: 'cliente/:id', component: ClienteComponent},

    {path: 'login', component: LoginComponent}
];
//Exportacion
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);