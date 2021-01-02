import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { Cliente } from './../models/product';
import {CLIENTE  } from './../collection-cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClientes():Observable<Cliente[]>{
    return of (CLIENTE);
  }
  
  getCliente(id:number):Observable<Cliente>{
    console.log("Id solicitado: "+id);
    return of(CLIENTE.find(ejercicio=>ejercicio.id===id));
  }
 
}
