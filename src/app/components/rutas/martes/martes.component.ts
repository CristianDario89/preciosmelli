import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
       
@Component({
  selector: 'app-martes',
  templateUrl: './martes.component.html',
  styleUrls: ['./martes.component.css']
})
export class MartesComponent implements OnInit {

  usuario: any;
  usuarios: any[] = [
   /* { id: 5, nombre:'Jean Carlos', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p5.jpg'},
    { id: 6, nombre:'Homero',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p6.jpg' },
    { id: 7, nombre:'Mbappesa', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p7.jpg'}*/
    
       {
        direccion : "Wenceslao de tata 4696",
        id : 1,
        localidad : "Caseros",
        name : "Jean Carlos",
        observacion : "1",
        pago : "0",
        price : 250,
        ruta: "B 12Lts",
        telefono : 1168564546,
        tipo: "Lunes",
        img:'../../../assets/img/martes/m1b.png', 
        img2:'../../../assets/img/martes/m1.jpg'
      },
      {
        direccion: "Roca 4760 (pasillo)",
        id: 2,
        localidad: "VillaBosch",
        name : "Mario ",
        observacion: "1",
        pago : "Mes",
        price : 220,
        ruta : "2",
        telefono : 1132986541,
        tipo : "Lunes"
      },
       {
        direccion : "Armenia 3537",
        id : 3,
        localidad : "VillaBosch",
        name : "Luis Alberto ",
        observacion : "1",
        pago : "Mes",
        price : 220,
        ruta: "1",
        telefono: 47621676,
        tipo: "Lunes"
      },
      {
        direccion: "Armenia",
        id: 4,
        localidad: "VillaBosch",
        name : "Ezequiel",
        observacion : "5",
        pago : "Mes",
        price : 220,
        ruta : "2",
        telefono : 1131782445,
        tipo : "Lunes"
      },
     {
        direccion: "Luis María Drago 5353",
        id: 5,
        localidad: "VillaBosch",
        name: "Ignacio",
        observacion: "1",
        pago : "Mes",
        price : 180,
        ruta : "2",
        telefono: 1169625428,
        tipo : "Lunes"
      },
     {
        direccion : "Sargento Cabral 2073",
        id : 6,
        localidad : "VillaBosch",
        name : "Jaime",
        observacion : "2",
        pago : "Mes",
        price : 440,
        ruta : "2",
        telefono : 1170149620,
        tipo: "Lunes"
      },
       {
        direccion : "Monoblock 18 almacén",
        id : 7,
        localidad : "Palomar",
        name: "Elizabeth",
        observacion: "1",
        pago: "Mes",
        price: 280,
        ruta: "1",
        telefono: 1125327209,
        tipo: "Lunes"
      },
     {
        direccion: "Belgrano 3495 portón",
        id: 8,
        localidad: "VillaBosch",
        name: "Gabriela",
        observacion: "1",
        pago: "Mes",
        price : 280,
        ruta: "1",
        telefono: 1125401440,
        tipo: "Lunes"
      },
     {
        direccion: "Belgrano 2471",
        id : 9,
        localidad : "VillaBosch",
        name: "Yoni local ",
        observacion: "1",
        pago: "Mes",
        price: 280,
        ruta: "1",
        telefono : 1159626806,
        tipo: "Lunes"
      },
     {
        direccion: "Belgrano",
        id: 9,
        localidad: "VillaBosch",
        name: "Jiu ( supermercado)",
        observacion: "1",
        pago: "Mes",
        price: 250,
        ruta: "2",
        telefono: 1121968526,
        tipo: "Lunes"
      },
      {
        direccion : "Bernardo de Irigoyen 1189",
        id : 11,
        localidad : "VillaBosch",
        name: "Demesia",
        observacion: "1",
        pago: "Mes",
        price: 220,
        ruta: "1",
        telefono: 1122501893,
        tipo: "Lunes"
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
