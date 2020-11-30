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
    { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
    { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
    { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
    { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' }
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
