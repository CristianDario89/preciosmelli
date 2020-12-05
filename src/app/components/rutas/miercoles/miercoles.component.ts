import { Component, OnInit } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
 
// model
import { Product } from '../../../models/product';

// service
import { ProductService } from '../../../services/product.service';
    
@Component({
  selector: 'app-miercoles',
  templateUrl: './miercoles.component.html',
  styleUrls: ['./miercoles.component.css']
})
export class MiercolesComponent implements OnInit {
  productList: Product[];
  usuario: any;
  usuarios: any[] = [
  /*  { id: 1, nombre:'Andres',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p1.jpg' },
    { id: 2, nombre:'Tomy', img:'../../../assets/img/m2.png', img2:'../../../assets/img/p2.jpg'},
    { id: 3, nombre:'Cristiano',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p3.jpg' },
    { id: 4, nombre:'Lio',img:'../../../assets/img/m1.png',img2:'../../../assets/img/p4.jpg' }*/
    {
      direccion: "General hornos 1975",
      id: 23,
      localidad: "Caseros",
      name: "Araldo",
      observacion: "1",
      pago: "Mes",
      price: 60,
      ruta: "1",
      telefono: 47522250,
      tipo: "Miércoles"
    },
    {
      direccion : "Sabattini 5681",
      id : 24,
    localidad : "MartiCoronado",
      name : "Romina ",
      observacion: "1",
      pago: "Mes",
    price: 250,
      ruta: "1",
      telefono: 1150011074,
      tipo: "Miércoles"
    },
    {
      direccion: "Pringles 3577",
    id: 27,
      localidad: "Caseros",
      name: "Belén",
      observacion: "1",
      pago: "Mes",
      price: 170,
      ruta: "2",
      telefono: 1151414818,
      tipo: "Miércoles"
    },
    {
      direccion: "Año 1852 460",
      id: 28,
      localidad: "Palomar",
      name: "Alicia",
      observacion: "1",
      pago: "Mes",
      price: 250,
      ruta: "1",
      telefono: 1168321886,
      tipo : "Miércoles"
    },
    {
      direccion: "Guido Spano 1813",
      id: 52,
      localidad: "Martin Coronado",
      name: "Mirta Ayala",
      observacion: "2",
      pago: "1",
      price: 280,
      ruta: "B 12Lts",
      telefono: 1143998042,
      tipo: "Miércoles"
    },
   {
      direccion: "Sargento Palma 1260",
      id: 53,
      localidad: "Martin Coronado",
      name: "Lorena",
      observacion: "2",
      pago: "1",
      price: 220,
      ruta: "Bs 12Lts",
      telefono: 1131299245,
      tipo: "Miércoles"
    },
    {
      direccion: "Rio Negro 1880",
      id: 55,
      localidad: "Palomar",
      name: "Sonia",
      observacion: "1",
      pago: "1",
      price: 1120,
      ruta: "B 12Lts",
      telefono: 1125870372,
      tipo: "Miércoles"
    }
  ] 
  
    constructor( private productService: ProductService,private modalService: NgbModal) { }
    closeResult = '';
  
    ngOnInit() { 
      return this.productService.getProducts()
      .snapshotChanges().subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
      }); 
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
