import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar componentes
import { RutasComponent } from './components/rutas/rutas.component';
import { ReciboComponent } from './components/recibo/recibo.component';

import { LunesComponent } from './components/rutas/lunes/lunes.component';
import { MartesComponent } from './components/rutas/martes/martes.component';

import { ProductsComponent } from './components/products/products.component';
//array de rutas
const appRoutes: Routes = [ //pa q se cumplan los formato de angular
   /* {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},*/
    {path: '', component: ProductsComponent},
    {path: 'rutas', component: RutasComponent},
    {path: 'recibo', component: ReciboComponent},
    {path: 'rutas/lunes', component: LunesComponent},
    {path: 'rutas/martes', component: MartesComponent}
   
];
//Exportacion
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);