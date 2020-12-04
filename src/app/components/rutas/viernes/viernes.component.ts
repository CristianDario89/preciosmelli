import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import * as $ from "jquery";
@Component({
  selector: 'app-viernes',
  templateUrl: './viernes.component.html',
  styleUrls: ['./viernes.component.css']
})
export class ViernesComponent implements OnInit {
  public fecha: any;
  usuario: any;
  usuarios: any[] = [
  /*  { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
    { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
    { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
    { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' }*/
    {
      direccion: "Vuelta de obligado 4885",
      id: 21,
      localidad : "VillaBosch",
      name : "Ricardo",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 5493751613309,
      tipo: "Viernes"
    },
    {
      direccion: "Rivadavia 3745 6to \"D\"",
      id: 29,
      localidad: "SanMartin",
      name: "Eduardo",
      observacion: "1",
      pago: "Mes",
      price: 240,
      ruta: "2",
      telefono: 1164545723,
      tipo: "Viernes"
    },
    {
      direccion: "Av. De los Constituyentes",
      id: 38,
      localidad: "SanMartin",
      name: "Alejandra",
      observacion: "1",
      pago: "Mes",
      price: 220,
      ruta: "1",
      telefono: 1138225293,
      tipo: "Viernes"
    },
    {
      direccion: "Pueyrredón 2800",
      id: 45,
      localidad: "SanMartin",
      name: "Yanina",
      observacion: "1",
      pago: "Mes",
      price: 190,
      ruta: "1",
      telefono: 1123890229,
      tipo: "Viernes"
    },
    {
      direccion: "Canesse 3567",
      id: 46,
      localidad: "San martin",
      name: "Martin alfeo",
      observacion: "2",
      pago: "1",
      price: 275,
      ruta: "B 12Lts",
      telefono: 1158340588,
      tipo: "Viernes"
    },
    {
      direccion: "Alvear 3953",
      id: 50,
      localidad: "Billinghurst",
      name: "Juan",
      observacion: "2",
      pago: "1",
      price: 280,
      ruta: "B 12Lts",
      telefono: 1167995252,
      tipo: "Viernes"
    },
   {
      direccion: "Rivadavia 3745 6to \"C\"",
      id: 51,
      localidad: "San martin",
      name: "Dalia",
      observacion: "2",
      pago: "1",
      price: 240,
      ruta: "B 12Lts",
      telefono: 1121806560,
      tipo: "Viernes"
    },
   {
      direccion: "Pellegrini 1792 \"Pb\"",
      id: 52,
      localidad: "San martin",
      name: "Carlos",
      observacion: "2",
      pago: "1",
      price: 250,
      ruta: "B 12Lts",
      telefono: 1133012860,
      tipo: "Viernes"
    },
    {
      direccion: "San Lorenzo 2272 3ro \"B\"",
      id: 54,
      localidad: "San martin",
      name: "Cristian",
      observacion: "3",
      pago: "1",
      price: 210,
      ruta: "B 12Lts",
      telefono: 1161823876,
      tipo: "Viernes"
    },
    {
      direccion: "Juárez 3758 t B",
      id: 57,
      localidad: "San martin",
      name: "Nancy",
      observacion: "3",
      pago: "1",
      price: 290,
      ruta: "B 12Lts",
      telefono: 5493437449915,
      tipo: "Viernes"
    },
     {
      direccion: "San Luis 3564",
      id: 58,
      localidad: "San Andrès",
      name: "Liliana",
      observacion: "2",
      pago: "1",
      price: 250,
      ruta: "B 12Lts",
      telefono: 1138488758,
      tipo: "Viernes"
    },
    {
      direccion: "Gral. Güemes 3820 ",
      id: 59,
      localidad: "San martin",
      name: "Lorena",
      observacion: "2",
      pago: "1",
      price: 1120,
      ruta: "B 12Lts",
      telefono: 1139188192,
      tipo: "Viernes"
    },
    {
      direccion: "Pueyrredón 2610 t izq",
      id: 60,
      localidad: "San martin",
      name: "Monica",
      observacion: "2",
      pago: "1",
      price: 250,
      ruta: "B 12Lts",
      telefono: 1133591935,
      tipo: "Viernes"
    },
    {
      direccion: "José María Campos 1664",
      id: 62,
      localidad: "San martin",
      name: "Marcelo",
      observacion: "2",
      pago: "1",
      price : 250,
      ruta: "B 12Lts",
      telefono: 1164779576,
      tipo: "Viernes"
    }
  ] 
  
    constructor(private modalService: NgbModal) { }
    closeResult = '';
  
    ngOnInit() {
      this.fecha = new Date(); 
           $(".mifecha").css('color', 'gray'); 
           }
  
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
