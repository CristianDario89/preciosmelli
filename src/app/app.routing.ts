import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importar componentes
import { RutasComponent } from './components/rutas/rutas.component';
import { ReciboComponent } from './components/recibo/recibo.component';
//array de rutas
const appRoutes: Routes = [ //pa q se cumplan los formato de angular
   /* {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},*/
   
    {path: 'rutas', component: RutasComponent},
    {path: 'recibo', component: ReciboComponent}
   
];
//Exportacion
export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);