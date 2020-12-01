import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
       
@Component({
  selector: 'app-lunes',
  templateUrl: './lunes.component.html',
  styleUrls: ['./lunes.component.css']
})
export class LunesComponent implements OnInit {

  usuario: any;
  usuarios: any[] = [
  /*  { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
    { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
    { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
    { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' }*/
    {
      direccion: "Batallán 3002",
      id: 12,
      localidad: "Saenz Peña",
      name: "Sebastián",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "2",
      telefono: 1150482840,
      tipo: "Martes",
      img:'../../../assets/img/martes/m2b.png', 
      img2:'../../../assets/img/martes/m2.jpg'
    },
    {
      direccion : "Ernesto Sábato 3451 portón negro",
      id : 19,
      localidad : "VillaBosch",
      name : "Nicolás",
      observacion : "1",
      pago: "Mes",
      price: 250,
      ruta: "2",
      telefono: 1135091381,
      tipo: "Martes"
    },
     {
      direccion: "Vuelta de Obligado 4885",
      id: 20,
      localidad: "VillaBosch",
      name: "Ynes",
      observacion: "1",
      pago: "Mes",
      price: 190,
      ruta: "2",
      telefono: 1133901892,
      tipo: "Martes"
    },
    {
      direccion: "Casas 2822 5D",
      id: 22,
      localidad: "Caseros",
      name: "Luis Ramírez",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 3489631966,
      tipo: "Martes"
    },
    {
      direccion: "Barrio ",
      id: 35,
      localidad: "Palomar",
      name: "Gaby ",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 1129315386,
      tipo: "Martes"
    },
    {
      direccion: "Asamblea 789",
      id: 39,
      localidad: "MartiCoronado",
      name: "Sabrina",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 1168626818,
      tipo: "Martes"
    },
    {
      direccion: "Estrada 1248 5to \"A\"",
      id: 40,
      localidad: "MartiCoronado",
      name: "Daniela ",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 1158205475,
      tipo: "Martes"
    },
    {
      direccion: "Estrada 1248 1ro \"B\"",
      id: 41,
      localidad : "MartiCoronado",
      name: "Abraham ",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 1167317810,
      tipo: "Martes"
    },
    {
      direccion: "Kiisco",
      id: 44,
      localidad: "Palomar",
      name: "Luis",
      price: 250,
      telefono: 1165509320,
      tipo: "Martes"
    }
  ] 
  
    constructor(private modalService: NgbModal) { }
    closeResult = '';
  
    ngOnInit() { }
  
    ver(usuario: any, modal){
      this.usuario = usuario;
      this.modalService.open(modal);
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

}
