import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location } from '@angular/common';

import { ClienteService } from '../../../../services/cliente.service';
import { Cliente } from './../../../../models/product'; 
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
ReadMore:boolean=true;
visible:boolean=false;
 
cliente:Cliente;
  constructor(private route:ActivatedRoute, private ejercicioService:ClienteService,
    private location:Location) { }

  ngOnInit() {/*
    let id = this.route.snapshot.params['id'];
    this.clienteSvc.getUser(id).subscribe(u =>{
     
      this.cliente = u;
    });*/
    this.getEjercicio();
}

getEjercicio():void{
  const id=+this.route.snapshot.paramMap.get('id');
  this.ejercicioService.getCliente(id).subscribe(ejercicio=>this.cliente=ejercicio)
}

goBack():void{
  this.location.back();
}
  onclick(){
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }


  
}
