import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-jueves',
  templateUrl: './jueves.component.html',
  styleUrls: ['./jueves.component.css']
})
export class JuevesComponent implements OnInit {
  usuario: any;
  usuarios: any[] = [
  /*  { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
    { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
    { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
    { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' }*/
    {
      direccion : "Fasola 431 Dpto B",
      id: 25,
      localidad : "Haedo",
      name: "Gastón",
      observacion: "1",
      pago: "Mes",
      price : 280,
      ruta: "1",
      telefono: 1128279085,
      tipo: "Jueves"
    },
   {
    direccion: "Los paraísos 1516 ",
      id: 26,
      localidad: "VillaBosch",
      name: "Estefania ",
      observacion: "1",
      pago: "Mes",
      price: 190,
      ruta: "2",
      telefono: 1163989681,
      tipo: "Jueves"
    },
    {
      direccion: "Miguel Cané 2155",
      id : 30,
      localidad : "VillaBosch",
      name : "Ana",
      observacion : "1",
      pago : "Mes",
      price : 320,
      ruta: "1",
      telefono: 25896322,
      tipo: "Jueves"
    },
    {
      direccion : "Luis María Drago 2033",
      id : 32,
      localidad : "Villa Adelina",
      name: "Mercedes",
      observacion : "2",
      pago : "1",
      price : 240,
      ruta : "Bs 12Lts",
      telefono: 1154200986,
      tipo: "Jueves"
    },
    {
      direccion : "Pedernera 1333",
      id : 34,
      localidad : "VillaBosch",
      name : "Liliana ",
      observacion : "1",
      pago : "Mes",
      price: 250,
      ruta: "2",
      telefono: 1150994959,
      tipo: "Jueves"
    },
    {
      direccion : "Av. Libertador 2354 5to \"A\"",
      id : 36,
      localidad : "Caseros",
      name: "Cristina ",
      observacion : "3",
      pago : "1",
      price: 280,
      ruta: "B 12Lts",
      telefono : 1168510200,
      tipo : "Jueves"
    },
    {
      direccion: "Martina Céspedes 710",
      id: 43,
      localidad: "Villa Adelina",
      name: "Andrea",
      observacion : "2",
      pago : "1",
      price: 280,
      ruta: "B 12Lts",
      telefono: 1159968784,
      tipo: "Jueves"
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
