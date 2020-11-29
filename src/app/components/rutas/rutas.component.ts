import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
       
@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

usuario: any;
usuarios: any[] = [
  { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
  { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
  { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
  { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' },
  { id: 5, nombre:'La mona', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p5.jpg'},
  { id: 6, nombre:'Homero',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p6.jpg' },
  { id: 7, nombre:'Mbappesa', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p7.jpg'}
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
